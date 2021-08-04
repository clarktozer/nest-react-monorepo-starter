import { Action, Subject } from '@monorepo/casl';
import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { SessionGuard } from '../auth/session.guard';
import { Authorized } from '../casl/casl.decorator';
import { AuthorizationGuard } from '../casl/casl.guard';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(AuthorizationGuard, SessionGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('admins')
  @Authorized(ability => ability.can(Action.Manage, Subject.All))
  findAllAdmins() {
    return this.userService.findAllAdmins();
  }

  @Get()
  @Authorized(ability => ability.can(Action.Read, Subject.Users))
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @Authorized([
    {
      [Subject.Users]: Action.Read,
    },
  ])
  findById(@Param() id: string) {
    return this.userService.getById(id);
  }
}
