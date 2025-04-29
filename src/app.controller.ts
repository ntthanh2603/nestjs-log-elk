import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import logger from './logger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    logger.info('Welcome to home page');
    return this.appService.getHello();
  }

  @Get('/post')
  getPost(): string {
    logger.info('Welcome to post page');
    return 'Wellcome to the post page';
  }
}
