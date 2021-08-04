import { SetMetadata } from '@nestjs/common';
import { AuthorizationHandler } from './casl.interface';

export const AUTHORIZED_KEY = 'authorized';

export const Authorized = (handler: AuthorizationHandler) =>
  SetMetadata(AUTHORIZED_KEY, handler);
