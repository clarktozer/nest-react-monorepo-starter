import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AntiForgeryMiddleware } from '../csrf/csrf.middleware';
import { CsrfModule } from '../csrf/csrf.module';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthSerializer } from './auth.serializer';
import { AuthService } from './auth.service';
import { FacebookAuthModule } from './facebook/facebook.module';
import { GoogleAuthModule } from './google/google.module';
import { LinkedinAuthModule } from './linkedin/linkedin.module';
import { LocalAuthStrategy } from './local/local.strategy';

@Module({
  imports: [
    CsrfModule,
    UserModule,
    PassportModule.register({ session: true }),
    GoogleAuthModule,
    FacebookAuthModule,
    LinkedinAuthModule,
  ],
  providers: [AuthService, LocalAuthStrategy, AuthSerializer],
  controllers: [AuthController],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AntiForgeryMiddleware).forRoutes(
      {
        path: '/auth/*/redirect',
        method: RequestMethod.GET,
      },
      {
        path: '/auth/login',
        method: RequestMethod.POST,
      },
    );
  }
}
