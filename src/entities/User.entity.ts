
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}