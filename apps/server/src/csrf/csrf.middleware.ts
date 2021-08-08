import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Tokens from 'csrf';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AntiForgeryMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}

  use(request: Request, response: Response, next: NextFunction) {
    const tokens = new Tokens();
    const secret = tokens.secretSync();
    const token = tokens.create(secret);

    response.cookie(this.configService.get<string>('csrf.cookie'), token, {
      httpOnly: true,
      sameSite: false,
      secure: !this.configService.get<boolean>('development'),
    });
    request.session[this.configService.get<string>('csrf.session')] = secret;

    next();
  }
}
