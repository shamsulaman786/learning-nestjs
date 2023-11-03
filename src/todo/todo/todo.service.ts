import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from 'src/entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  findOne(id: number): Promise<Todo | null> {
    return this.todosRepository.findOneBy({ id });
  }
  async create(todo: Todo): Promise<Todo> {
    return this.todosRepository.save(todo);
  }

  async update(id: number, updateData: Partial<Todo>): Promise<Todo | null> {
    const todo = await this.findOne(id);
    if (!todo) {
      return null; // Todo not found
    }

    Object.assign(todo, updateData);
    return this.todosRepository.save(todo);
  }
  
  async remove(id: number): Promise<void> {
    await this.todosRepository.delete(id);
  }

}