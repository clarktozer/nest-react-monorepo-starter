import { Module } from '@nestjs/common';
import { CaslAbilityFactory } from './casl.factory';
import { AuthorizationGuard } from './casl.guard';

@Module({
  providers: [CaslAbilityFactory, AuthorizationGuard],
  exports: [CaslAbilityFactory, AuthorizationGuard],
})
export class CaslModule {}
