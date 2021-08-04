import { Role } from '@monorepo/casl';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  avatar?: string;

  @Column({
    nullable: true,
  })
  @Exclude()
  password?: string;

  @Column({
    nullable: true,
    unique: true,
    name: 'google_id',
  })
  @Exclude()
  googleId?: string;

  @Column({
    nullable: true,
    unique: true,
    name: 'facebook_id',
  })
  @Exclude()
  facebookId?: string;

  @Column({
    nullable: true,
    unique: true,
    name: 'linkedin_id',
  })
  @Exclude()
  linkedinId?: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Reader,
  })
  role: Role;

  @Column()
  @CreateDateColumn({
    name: 'created_at',
  })
  @Exclude()
  createdAt: Date;

  @Column()
  @Exclude()
  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
  })
  @Exclude()
  deletedAt?: Date;
}
