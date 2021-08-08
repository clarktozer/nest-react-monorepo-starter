import { registerUserSchema } from '@monorepo/validation';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { YupValidationPipe } from '../pipes/yup.pipe';
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
  @UsePipes(new YupValidationPipe(registerUserSchema))
  register(@Body() data: RegisterUserDto) {
    return this.authService.register(data);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() request: RequestWithUser) {
    return request.user;
  }

  @Get()
  async me(@Req() request: RequestWithUser) {
    if (request.isAuthenticated()) {
      return request.user;
    } else {
      return null;
    }
  }

  @Post('logout')
  @UseGuards(SessionGuard)
  logout(@Req() request: RequestWithUser, @Res() response: Response) {
    request.logout();
    request.session.destroy(err => {
      if (err) {
        throw new InternalServerErrorException();
      }

      response
        .clearCookie(this.configService.get('session.cookie'))
        .clearCookie(this.configService.get('csrf.cookie'))
        .sendStatus(200);
    });
  }
}
