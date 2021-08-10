import { defineRules } from '@monorepo/casl';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: UserEntity) {
    return defineRules(user.role);
  }
}
