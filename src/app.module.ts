import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo/todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import dataSource from './database/migration.config';
import { Todo } from './entities/todo.entity';
import { TodoModule } from './todo/todo/todo.module';
import { User } from './entities/User.entity';
import { TodosService } from './todo/todo/todo.service';
import { UsersService } from './todo/todo/user.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'todo',
    entities: [Todo,User],
    synchronize: true,
  }),
  TodoModule,
  TypeOrmModule.forFeature([User, Todo])
  ],
  controllers: [AppController, TodoController],
  providers: [AppService, TodosService, UsersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'todos', method: RequestMethod.GET });
    consumer.apply(LoggerMiddleware)
    .exclude(
      { path: 'todos', method: RequestMethod.PUT },
      { path: 'todos', method: RequestMethod.POST },
      'todos/(.*)',
    )
    .forRoutes(TodoController);
  }
}

