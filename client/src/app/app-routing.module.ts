/* eslint-disable prettier/prettier */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCRUDComponent } from './todo-crud/todo-crud.component';

const routes: Routes = [{ path: 'todos', component: TodoCRUDComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
