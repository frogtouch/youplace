import { Controller, Get } from '@nestjs/common';
import RepoService from './services/repo.service';

@Controller()
export class AppController {
  constructor(private readonly repoService: RepoService) {}

  //A função assincrona precisa retornar uma promise
  @Get()
  async getHello(): Promise<string> {
    return `There are ${await this.repoService.messageRepo.count()} existent messages.` 
  }
}
