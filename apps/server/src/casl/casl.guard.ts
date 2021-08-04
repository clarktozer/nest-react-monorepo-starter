import { isAuthorized } from '@monorepo/casl';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RequestWithUser } from '../auth/request.interface';
import { AUTHORIZED_KEY } from './casl.decorator';
import { CaslAbilityFactory } from './casl.factory';
import { AuthorizationHandler } from './casl.interface';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const handler = this.reflector.get<AuthorizationHandler>(
      AUTHORIZED_KEY,
      context.getHandler(),
    );

    if (!handler) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest<RequestWithUser>();

    if (!user) {
      throw new UnauthorizedException();
    }

    const ability = this.caslAbilityFactory.createForUser(user);

    if (typeof handler === 'function') {
      return handler(ability);
    }

    return isAuthorized(ability, handler);
  }
}
