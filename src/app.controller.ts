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
    this.logNestService.debug('Debugging the controller', 'AppController');
    this.logNestService.warn('This is a warning', 'AppController');
    this.logNestService.error('This is an error', 'AppController');
    return this.appService.getHello();
  }

  @Get('/post')
  getPost(): string {
    return 'Wellcome to the post page';
  }
}
