import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as connectRedis from 'connect-redis';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as Redis from 'ioredis';
import * as passport from 'passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');
  const host = configService.get<string>('host');
  const prefix = configService.get<string>('prefix');

  app.setGlobalPrefix(prefix);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.use(cookieParser());

  const RedisStore = connectRedis(session);
  const redisClient = new Redis(
    configService.get<number>('session.redis.port'),
    configService.get<string>('session.redis.host'),
  );

  app.use(
    session({
      store: new RedisStore({
        client: redisClient,
      }),
      secret: configService.get<string>('session.secret'),
      resave: false,
      saveUninitialized: false,
      name: configService.get<string>('session.cookie'),
      cookie: {
        httpOnly: true,
        sameSite: false,
        secure: !configService.get<boolean>('development'),
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Your API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  Logger.log(`Starting HTTP server on ${host}:${port} ...`);

  await app.listen(port);

  Logger.log(`Started HTTP server: http://${host}:${port}/${prefix}`);
}

bootstrap();
