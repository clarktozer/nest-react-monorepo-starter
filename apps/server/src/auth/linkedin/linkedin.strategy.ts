import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { VerifyCallback } from 'passport-google-oauth20';
import { Profile, Strategy } from 'passport-linkedin-oauth2';
import { CreateUserDto } from '../../user/dto/createUserDto';
import { UserService } from '../../user/user.service';

@Injectable()
export class LinkedinAuthStrategy extends PassportStrategy(
  Strategy,
  'linkedin',
) {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
  ) {
    super({
      clientID: configService.get<string>('linkedin.clientId'),
      clientSecret: configService.get<string>('linkedin.clientSecret'),
      callbackURL: configService.get<string>('linkedin.callbackURL'),
      scope: ['r_emailaddress', 'r_liteprofile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ) {
    try {
      const { id: linkedinId, displayName: name, emails, photos } = profile;

      const newUser: CreateUserDto = {
        linkedinId,
        name,
        email: emails ? emails[0].value : '',
        avatar: photos ? photos[0].value : '',
      };

      let user = await this.userService.getBylinkedinId(newUser.linkedinId);
      if (user) {
        return done(null, user);
      }

      user = await this.userService.getByEmail(newUser.email);
      if (user) {
        return done(
          new ForbiddenException(
            'User already exists but LinkedIn account was not connected to user account',
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
