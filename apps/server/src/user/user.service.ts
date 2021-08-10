import { Role } from '@monorepo/casl';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { RegisterUserDto } from './dto/registerUserDto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async getByEmail(email: string) {
    return this.usersRepository.findOne({ email });
  }

  async getById(id: string) {
    return this.usersRepository.findOne(id);
  }

  async register(userData: RegisterUserDto) {
    const { email, name, password } = userData;
    const newUser = this.usersRepository.create({
      email,
      name,
      password,
    });
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

  async findAllReaders() {
    return this.usersRepository.find({
      role: Role.Reader,
    });
  }

  async findAllAdmins() {
    return this.usersRepository.find({
      role: Role.Admin,
    });
  }
}
