import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  // create app
  const app = await NestFactory.create(AppModule);

  // get configService
  const config = app.get(ConfigService);

  // api prefix
  const globalPrefix = config.get<string>('API_PREFIX');
  app.setGlobalPrefix(globalPrefix);

  // validation
  app.useGlobalPipes(new ValidationPipe());

  // get port
  const port = config.get<number>('API_PORT') || 3333;

  // run app
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
