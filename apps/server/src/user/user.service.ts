import { Role } from '@monorepo/casl';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { RegisterUserDto } from './dto/registerUserDto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getByEmail(email: string) {
    return this.usersRepository.findOne({ email });
  }

  async getById(id: string) {
    return this.usersRepository.findOne(id);
  }

  async register(userData: RegisterUserDto) {
    const newUser = this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);

    return newUser;
  }

  async getByGoogleId(id: string) {
    const user = await this.usersRepository.findOne({ googleId: id });

    return user;
  }

  async getByFacebookId(id: string) {
    const user = await this.usersRepository.findOne({ facebookId: id });

    return user;
  }

  async getBylinkedinId(id: string) {
    const user = await this.usersRepository.findOne({ linkedinId: id });

    return user;
  }

  async create(userData: CreateUserDto) {
    const newUser = this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);

    return newUser;
  }

  async findAll() {
    return this.usersRepository.find();
  }

  async findAllAdmins() {
    return this.usersRepository.find({
      role: Role.Admin,
    });
  }
}
