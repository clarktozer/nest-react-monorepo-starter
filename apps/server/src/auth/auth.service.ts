import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from '../user/dto/registerUserDto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService) {}

  public async register(user: RegisterUserDto) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    try {
      await this.usersService.register({
        ...user,
        password: hashedPassword,
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  public async validateUser(email: string, plainTextPassword: string) {
    const user = await this.usersService.getByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }

    await this.verifyPassword(plainTextPassword, user.password);

    return user;
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    );

    if (!isPasswordMatching) {
      throw new UnauthorizedException();
    }
  }
}
