export class CreateUserDto {
  email: string;
  name: string;
  avatar: string;
  googleId?: string;
  facebookId?: string;
  linkedinId?: string;
}
