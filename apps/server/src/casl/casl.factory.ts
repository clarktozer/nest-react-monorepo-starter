import { defineRules } from '@monorepo/casl';
import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    return defineRules(user.role);
  }
}
