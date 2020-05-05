import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RepoService from './services/repo.service';
import User from './db/models/user.entity';
import Message from './db/models/message.entity';

//Modulo usa todas as partes do sistema
@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Message
    ]),
  ],
  providers: [RepoService],
  exports: [RepoService],
})
class RepoModule {

}
export default RepoModule;