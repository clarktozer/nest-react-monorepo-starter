import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Tokens from 'csrf';
import { Request } from 'express';

@Injectable()
export class AntiForgeryGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();

    const tokens = new Tokens();
    const token =
      request.cookies[this.configService.get<string>('csrf.cookie')];
    const secret =
      request.session[this.configService.get<string>('csrf.session')];

    if (!token || !secret || !tokens.verify(secret, token)) {
      throw new ForbiddenException();
    }

    return true;
  }
}
