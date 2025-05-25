import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LogNestService } from './logger/log-nest.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private logNestService: LogNestService,
  ) {}

  @Get()
  getHello(): string {
    this.logNestService.log('Hello from the controller', 'AppController');
    return this.appService.getHello();
  }

  @Get('/post')
  getPost(): string {
    return 'Wellcome to the post page';
  }
}
