
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Todo } from './todo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  middleName: string;

  @Column()
  lastName: string;

  @Column({nullable:true,length:14})
  phone: string;

  @Column({nullable:true,length:14})
  phone2: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[]
}