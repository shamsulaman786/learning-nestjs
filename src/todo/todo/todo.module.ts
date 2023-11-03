import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';
import { TodoController } from './todo.controller';
import { TodosService } from './todo.service';
import { User } from 'src/entities/User.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Todo, User]) ],
    providers:[TodosService],
    controllers:[TodoController],
})

export class TodoModule {}