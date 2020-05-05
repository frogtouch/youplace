import { 
  Args, 
  Mutation, 
  Query, 
  Resolver, 
  Parent, 
  ResolveField 
} from '@nestjs/graphql';
import RepoService from '../services/repo.service';
import Message from 'src/db/models/message.entity';
import User from 'src/db/models/user.entity';
import MessageInput, { DeleteMessageInput, UpdateMessageInput } from './input/message.input';

//Query => Buscar algum registro
//Mutation => Criar, deletar ou alterar algum registro
//Message[] => uma promise com varias mensagens (se percebe pelo array)

@Resolver(() => Message)
export default class MessageResolver {
   constructor(private readonly repoService: RepoService) {}

  @Query(() => [Message])
  public async getMessages(): Promise<Message[]> {
    return this.repoService.messageRepo.find();
  }

  //Listar um unico usuário
  //Pegar uma mensagem pelo 'id' do usuário a partir do decorator '@Args'
  @Query(() => [Message], {nullable: true})
  public async getMessageFromUsers(@Args('userId') userId: number): Promise<Message[]> {
    return  this.repoService.messageRepo.find({
      where: { userId }
    });
  }

  @Query(() => Message, { nullable: true })
  public async getMessage(@Args('id') id: number): Promise<Message> {
    return this.repoService.messageRepo.findOne(id)
  }

  //Postar uma mensagem
  @Mutation(() => Message)
  public async createMessage(@Args('data') input: MessageInput): Promise<Message> {
      const message = this.repoService.messageRepo.create({
        id: input.userId,
        content: input.content,
      });

      return  this.repoService.messageRepo.save(message);
  }

  @Mutation(() => Message, { nullable: true })
  public async deleteMessage(@Args('data') input: DeleteMessageInput): Promise<Message> {
      const message = await this.repoService.messageRepo.findOne(input.id);
    
      if(!message || message.userId !== input.userId) 
        throw new Error('Message does not exist or you are not the messsage author.');

      const copy = { ...message };

      await this.repoService.messageRepo.remove(message);

      return copy;
  }

  @Mutation(() => Message)
  public async updateMessage(@Args('data') input: UpdateMessageInput): Promise<Message> {
      const message = await this.repoService.messageRepo.findOne(input.updateId);

      if(!message || message.userId !== input.userId) 
        throw new Error('Message does not exist or you are not the messsage author.');

      const copy = { ...message };

      //Se a entidade já existe no banco de dados, ela é atualizada. Se a entidade não existe no banco de dados, ela é inserida
      await this.repoService.messageRepo.save(message)

      return copy;
  }

  @ResolveField(() => User, { name: 'user' })
  public async getUser(@Parent() parent: Message): Promise<User> {
    return this.repoService.userRepo.findOne(parent.userId);
  }
}