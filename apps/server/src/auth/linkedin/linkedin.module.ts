import { Module } from '@nestjs/common';
import { UserModule } from '../../user/user.module';
import { LinkedinAuthController } from './linkedin.controller';
import { LinkedinAuthStrategy } from './linkedin.strategy';

@Module({
  imports: [UserModule],
  providers: [LinkedinAuthStrategy],
  controllers: [LinkedinAuthController],
})
export class LinkedinAuthModule {}
