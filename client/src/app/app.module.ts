/* eslint-disable prettier/prettier */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoCRUDComponent } from './todo-crud/todo-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxActionStripModule, IgxButtonModule, IgxCheckboxModule, IgxDialogModule, IgxGridComponent, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxPaginatorModule, IgxRippleModule, IgxSnackbarComponent, IgxSnackbarModule } from 'igniteui-angular';
import { AddTodoComponent } from './add-todo/add-todo.component';

@NgModule({
  declarations: [AppComponent, TodoCRUDComponent, AddTodoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    IgxGridModule,
    IgxActionStripModule,
    IgxButtonModule,
    IgxDialogModule,
    IgxInputGroupModule,
    IgxRippleModule,
    IgxIconModule,
    HttpClientModule,
    IgxCheckboxModule,
    ReactiveFormsModule,
    IgxPaginatorModule,
    IgxGridModule,
    IgxSnackbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
