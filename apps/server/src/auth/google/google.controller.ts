import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { Response } from 'express';
import { GoogleAuthGuard } from './google.guard';

@Controller('auth/google')
@UseGuards(GoogleAuthGuard)
export class GoogleAuthController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  async auth() {}

  @ApiExcludeEndpoint()
  @Get('redirect')
  redirect(@Res() response: Response) {
    return response.redirect(this.configService.get('clientAppUrl'));
  }
}
