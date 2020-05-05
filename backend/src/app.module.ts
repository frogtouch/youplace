import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './services/app.service';

//Configuraçoes do orm
import * as ormOption from './config/orm';
import RepoModule from './repo.module';
import { UserModule } from './modules/user.module';
import { GraphQLModule } from '@nestjs/graphql';


@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(ormOption), 
    RepoModule, GraphQLModule.forRoot({
      //Code first => Escolhe um arquivo e armazena tudo de forma temporária
      //Habilitando o GraphQL Playground => Uma visão de toda API documentada e explicativa
      context: ({ req }) => ({ req }),
      autoSchemaFile: 'schema.gql',
      playground: true,
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
