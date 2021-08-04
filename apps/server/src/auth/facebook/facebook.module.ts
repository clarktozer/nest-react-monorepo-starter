import { Module } from '@nestjs/common';
import { UserModule } from '../../user/user.module';
import { FacebookAuthController } from './facebook.controller';
import { FacebookAuthStrategy } from './facebook.strategy';

@Module({
  imports: [UserModule],
  providers: [FacebookAuthStrategy],
  controllers: [FacebookAuthController],
})
export class FacebookAuthModule {}
