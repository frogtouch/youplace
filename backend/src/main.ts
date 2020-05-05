import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Acessar servidor como: http://localhost:3333/graphql
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333);
}
bootstrap();
