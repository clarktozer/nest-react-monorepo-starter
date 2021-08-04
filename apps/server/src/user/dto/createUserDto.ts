import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  avatar: string;

  @IsString()
  googleId?: string;

  @IsString()
  facebookId?: string;

  @IsString()
  linkedinId?: string;
}
