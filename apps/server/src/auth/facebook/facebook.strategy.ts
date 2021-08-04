import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';
import { VerifyCallback } from 'passport-google-oauth20';
import { CreateUserDto } from '../../user/dto/createUserDto';
import { UserService } from '../../user/user.service';

@Injectable()
export class FacebookAuthStrategy extends PassportStrategy(
  Strategy,
  'facebook',
) {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
  ) {
    super({
      clientID: configService.get<string>('facebook.clientId'),
      clientSecret: configService.get<string>('facebook.clientSecret'),
      callbackURL: configService.get<string>('facebook.callbackURL'),
      scope: 'email',
      profileFields: ['id', 'email', 'displayName', 'picture'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ) {
    try {
      const { id: facebookId, displayName: name, emails, photos } = profile;

      const newUser: CreateUserDto = {
        facebookId,
        name,
        email: emails ? emails[0].value : '',
        avatar: photos ? photos[0].value : '',
      };

      let user = await this.userService.getByFacebookId(newUser.facebookId);
      if (user) {
        return done(null, user);
      }

      user = await this.userService.getByEmail(newUser.email);
      if (user) {
        return done(
          new ForbiddenException(
            'User already exists but Facebook account was not connected to user account',
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
