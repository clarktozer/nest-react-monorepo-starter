import { Module } from '@nestjs/common';
import { UserModule } from '../../user/user.module';
import { GoogleAuthController } from './google.controller';
import { GoogleAuthStrategy } from './google.strategy';

@Module({
  imports: [UserModule],
  providers: [GoogleAuthStrategy],
  controllers: [GoogleAuthController],
})
export class GoogleAuthModule {}
