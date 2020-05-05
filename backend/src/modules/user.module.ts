import {
  Module,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '../db/models/user.entity';
import { JwtStrategy } from '../middlewares/jwt.strategy';
import { UserResolver } from '../resolvers/user.resolver';

@Module({
  imports: [
      TypeOrmModule.forFeature([User])
  ],
  controllers: [],
  providers: [UserService, UserResolver, JwtStrategy],
  exports: [UserService, UserResolver],
})
export class UserModule { }