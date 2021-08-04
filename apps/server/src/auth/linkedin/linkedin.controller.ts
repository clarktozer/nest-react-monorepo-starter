import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { RequestWithUser } from '../request.interface';
import { LinkedinAuthGuard } from './linkedin.guard';

@Controller('auth/linkedin')
@UseGuards(LinkedinAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class LinkedinAuthController {
  @Get()
  async auth() {}

  @ApiExcludeEndpoint()
  @Get('redirect')
  redirect(@Req() request: RequestWithUser) {
    return request.user;
  }
}
