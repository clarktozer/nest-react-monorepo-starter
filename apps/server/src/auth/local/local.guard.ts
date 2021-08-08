import { userSchema } from '@monorepo/validation';
import {
  BadRequestException,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);
    const request = context.switchToHttp().getRequest<Request>();

    try {
      userSchema.validateSync(request.body, {
        abortEarly: false,
      });
    } catch (error) {
      throw new BadRequestException();
    }

    await super.logIn(request);

    return true;
  }
}
