import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { AntiForgeryGuard } from '../csrf/csrf.guard';
import { RegisterUserDto } from '../user/dto/registerUserDto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local/local.guard';
import { RequestWithUser } from './request.interface';
import { SessionGuard } from './session.guard';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  register(@Body() data: RegisterUserDto) {
    return this.authService.register(data);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() request: RequestWithUser) {
    return request.user;
  }

  @Get()
  @UseGuards(SessionGuard, AntiForgeryGuard)
  async me(@Req() request: RequestWithUser) {
    return request.user;
  }

  @Post('logout')
  @UseGuards(SessionGuard)
  logout(@Req() request: RequestWithUser, @Res() response: Response) {
    request.logout();
    request.session.destroy(() => {
      response
        .clearCookie(this.configService.get('session.key'))
        .sendStatus(200);
    });
  }
}
