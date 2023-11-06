import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';
import { TodoController } from './todo.controller';
import { TodosService } from './todo.service';
import { User } from 'src/entities/User.entity';
import { UsersService } from './user.service';

@Module({
    imports:[TypeOrmModule.forFeature([Todo, User]) ],
    providers:[TodosService, UsersService],
    controllers:[TodoController],
})

export class TodoModule {}