import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { Response } from 'express';
import { LinkedinAuthGuard } from './linkedin.guard';

@Controller('auth/linkedin')
@UseGuards(LinkedinAuthGuard)
export class LinkedinAuthController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  async auth() {}

  @ApiExcludeEndpoint()
  @Get('redirect')
  redirect(@Res() response: Response) {
    return response.redirect(`${this.configService.get('clientAppUrl')}/oauth`);
  }
}
