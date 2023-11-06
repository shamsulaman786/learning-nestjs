import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/User.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }
  async create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async update(id: number, updateData: Partial<User>): Promise<User | null> {
    const user = await this.findOne(id);
    if (!user) {
      return null; // User not found
    }

    Object.assign(user, updateData);
    return this.usersRepository.save(user);
  }
  
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

}