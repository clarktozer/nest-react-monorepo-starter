import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { CaslModule } from './casl/casl.module';
import { Configuration } from './config/configuration';
import { ConfigValidationSchema } from './config/validation';
import { CsrfModule } from './csrf/csrf.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [Configuration],
      validationSchema: ConfigValidationSchema,
      
    }),
    DatabaseModule,
    UserModule,
    AuthModule.,
    CaslModule,
    CsrfModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
