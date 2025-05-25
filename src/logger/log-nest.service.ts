/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Injectable, LoggerService } from '@nestjs/common';
import { createLogger, Logger, format, transports } from 'winston';
import * as dayjs from 'dayjs';
import chalk from 'chalk';
import * as path from 'path';
import 'winston-daily-rotate-file';

@Injectable()
export class LogNestService implements LoggerService {
  private logger: Logger;

  constructor() {
    this.logger = createLogger({
      level: 'info',
      transports: [
        new transports.Console({
          format: format.combine(
            format.colorize(),
            format.printf(({ context, message, level, time }) => {
              const strApp = chalk.green('[Nest]');
              const strContext = chalk.yellow(`[${context}]`);
              return `${strApp}     - ${time}        ${level} ${strContext} ${message}`;
            }),
          ),
        }),
        new transports.DailyRotateFile({
          level: 'info',
          dirname: path.join(__dirname, '../../nestjs-logs/'),
          filename: path.join(__dirname, 'app-%DATE%.log'),
          datePattern: 'YYYY-MM-DD',
          maxSize: '100m',
        }),
      ],
    });
  }

  log(message: string, context: string) {
    const time = dayjs().format('DD/MM/YYYY, HH:mm:ss');
    this.logger.log('info', message, { context, time });
  }

  error(message: string, context: string) {
    const time = dayjs().format('DD/MM/YYYY, HH:mm:ss');
    this.logger.error(message, { context, time });
  }

  warn(message: string, context: string) {
    const time = dayjs().format('DD/MM/YYYY, HH:mm:ss');
    this.logger.warn(message, { context, time });
  }

  debug(message: string, context: string) {
    const time = dayjs().format('DD/MM/YYYY, HH:mm:ss');
    this.logger.debug(message, { context, time });
  }
}
