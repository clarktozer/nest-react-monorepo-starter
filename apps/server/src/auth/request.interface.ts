import { Request } from 'express';
import { UserEntity } from '../user/user.entity';

export interface RequestWithUser extends Request {
  user: UserEntity;
}
