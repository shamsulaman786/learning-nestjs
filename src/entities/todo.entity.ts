import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User.entity';

@Entity()
export class Todo {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  status: boolean;

  @ManyToOne(() => User, (user) => user.todos)
  user: any;
}