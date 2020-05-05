import { Field, InputType } from '@nestjs/graphql';
import UserInput from './user.input';

//Para criar uma mensagem
@InputType()
export default class MessageInput {
  @Field()
  readonly content: string;

  @Field()
  readonly userId: number;
}

@InputType()
export class DeleteMessageInput {
  @Field()
  readonly id: number;

  @Field()
  readonly userId: number
}

@InputType()
export class UpdateMessageInput {
  @Field()
  readonly updateId: number

  @Field()
  readonly userId: number
}