import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { Response } from 'express';
import { FacebookAuthGuard } from './facebook.guard';

@Controller('auth/facebook')
@UseGuards(FacebookAuthGuard)
export class FacebookAuthController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  async auth() {}

  @ApiExcludeEndpoint()
  @Get('redirect')
  redirect(@Res() response: Response) {
    return response.redirect(this.configService.get('clientAppUrl'));
  }
}
