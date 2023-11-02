import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';
import { TodoController } from './todo.controller';
import { TodosService } from './todo.service';

@Module({
    imports:[TypeOrmModule.forFeature([Todo])],
    providers:[TodosService],
    controllers:[TodoController],
})

export class TodoModule {}