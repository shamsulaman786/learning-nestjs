import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo/todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import dataSource from './database/migration.config';
import { Todo } from './entities/todo.entity';
import { TodoModule } from './todo/todo/todo.module';
import { User } from './entities/User.entity';
import { TodosService } from './todo/todo/todo.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'todo',
    entities: [Todo],
    synchronize: true,
  }),
  TodoModule,
  TypeOrmModule.forFeature([User, Todo])
  ],
  controllers: [AppController, TodoController],
  providers: [AppService, TodosService],
})
export class AppModule { }

