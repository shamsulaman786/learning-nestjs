import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete
} from '@nestjs/common';
import { TodoDTO } from './todo.dto';
// import { todos } from './todos-mock';
import { User } from 'src/entities/User.entity';
import { DataSource } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TodosService } from './todo.service';
import { UsersService } from './user.service';
import { Todo } from 'src/entities/todo.entity';

// let todosData = todos;

@Controller('todos')
export class TodoController {
  
    constructor(@InjectRepository(User)
        private readonly usersService: UsersService,
        private readonly todosService: TodosService,
        public dataSource:DataSource
      ){}

    @Get()
    getTodos() {
        // using service & repo
        // return this.todosService.findAll();

        // using datasource ang query builder
        return this.dataSource.getRepository(Todo)
        .createQueryBuilder("todo")
        .getMany();
    }

    @Get(":id")
    getTodo(@Param("id") id): Promise<Todo | null> {
        // using srvice & repo
        // const todoTo = this.todosService.findOne(id);

        // using querybuilder with datasource & repo
        const todoTo = this.dataSource.getRepository(Todo)
        .createQueryBuilder("todo")
        .where("todo.id = :id", { id: id })
        .getOne()
    

        return todoTo;
    }

    @Post()
    createTodo(@Body() createTodo: any){
        // w/t db
        // const newTodo: TodoDTO = {
        //     id: (todosData.length + 1).toString(),
        //     ...createTodo
        // };

        // todosData = [...todosData, newTodo];

        // using service & repo
        const newTodo : Todo = createTodo;
         this.todosService.create(newTodo);

        // using query builder 
        // const newTodo = this.dataSource.createQueryBuilder()
        // .insert()
        // .into(Todo)
        // .values([
        //     { title: createTodo.title, status: createTodo.status },
        // ])
        // .execute()

        return createTodo;
    }

    @Put(":id")
    updateTodo(@Body() updateTodo: any, @Param("id") id): any {
        // w/t db
        // todosData = todosData
        //     .map(todo => (todo.id === id ? updateTodo : todo));


        // using service & repo
        this.todosService.update(id,updateTodo)

        // using querybuilder & repo
        // this.dataSource.createQueryBuilder()
        // .update(Todo)
        // .set({ title: updateTodo.title, status: updateTodo.status })
        // .where("id = :id", { id: id })
        // .execute();

        return updateTodo;
    }

    @Delete(":id")
    deleteTodo(@Param("id") id): Promise<Todo | void> {
        
        // using service & repo
        const todoToDelete = this.todosService.findOne(id);
        this.todosService.remove(id);

        // using qb with repo
        // const todoToDelete = this.dataSource.getRepository(Todo)
        // .createQueryBuilder("todo")
        // .where("todo.id = :id", { id: id })
        // .getOne()
        // this.dataSource
        // .createQueryBuilder()
        // .delete()
        // .from(Todo)
        // .where("id = :id", { id: id })
        // .execute()

        return todoToDelete;
    }

   /*  @Get('users')
    async getUsers() {

        // using service , not retruning result
        return this.usersService.findAll();
        
    } */
}
