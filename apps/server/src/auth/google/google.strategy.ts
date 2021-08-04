import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { CreateUserDto } from '../../user/dto/createUserDto';
import { UserService } from '../../user/user.service';

@Injectable()
export class GoogleAuthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
  ) {
    super({
      clientID: configService.get<string>('google.clientId'),
      clientSecret: configService.get<string>('google.clientSecret'),
      callbackURL: configService.get<string>('google.callbackURL'),
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    try {
      const { id: googleId, displayName: name, emails, photos } = profile;

      const newUser: CreateUserDto = {
        googleId,
        name,
        email: emails ? emails[0].value : '',
        avatar: photos ? photos[0].value : '',
      };

      let user = await this.userService.getByGoogleId(newUser.googleId);
      if (user) {
        return done(null, user);
      }

      user = await this.userService.getByEmail(newUser.email);
      if (user) {
        return done(
          new ForbiddenException(
            'User already exists but Google account was not connected to user account',
          ),
          false,
        );
      }

      user = await this.userService.create(newUser);

      return done(null, user);
    } catch {
      return done(null, false);
    }
  }
}
