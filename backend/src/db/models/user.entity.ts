import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Message from './message.entity';

interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
}

@ObjectType()
@Entity({ name: 'users' })
export default class User {

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column({ length: 50 })
  email: string;

  @Field()
  @Column("text")
  password: string;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;


  // Associations => Um user retorna varias messages e uma message retorna um users
  @OneToMany(
    () => Message, 
      message => message.userConnection
    )
    messageConnection: Promise<Message[]>;
}