/* eslint-disable prettier/prettier */
import { IgxGridComponent, IgxSnackbarComponent } from 'igniteui-angular';
import { TaskService } from './../tasks.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-crud',
  templateUrl: './todo-crud.component.html',
  styleUrls: ['./todo-crud.component.css'],
})
export class TodoCRUDComponent implements OnInit {
  @ViewChild('grid', { static: true })
  public grid!: IgxGridComponent;
  @ViewChild('snackbar', { static: false })
  public snackbar!: IgxSnackbarComponent;

  async rowEditDone(todo: any) {
    (await this.taskService.updateTask(todo.newValue)).subscribe(() => {
      this.taskService.getTasks().subscribe((data: any) => {
        this.data = data;
        this.isLoading = false;
        this.snackbar.open(
          `Row data with ID: ${todo.newValue.id} updated successfully!`,
        );
      },
      (error: any) => {
        console.error('Error fetching tasks:', error);
        this.isLoading = false;
        this.snackbar.open(`Error: ${error.error.error}, Message: ${error.error.message}`);
        this.isLoading = false;
      });
    },
    (error: any) => {
      console.error('Error updating task:', error);
      this.isLoading = false;
      this.snackbar.open(`Error: ${error.error.error}, Message: ${error.error.message}`);
      this.isLoading = false;
    });
  }
  async rowDeleted(todo: any) {
    (await this.taskService.deleteTask(todo.primaryKey)).subscribe(() => {
      this.taskService.getTasks().subscribe((data: any) => {
        this.data = data;
        this.isLoading = false;
        this.snackbar.open(
          `Row data with ID: ${todo.primaryKey} deleted successfully!`,
        );
      },
      (error: any) => {
        console.error('Error fetching tasks:', error);
        this.isLoading = false;
        this.snackbar.open(`Error: ${error.error.error}, Message: ${error.error.message}`);
        this.isLoading = false;
      });
    },
    (error: any) => {
      console.error('Error deleting task:', error);
      this.isLoading = false;
      this.snackbar.open(`Error: ${error.error.error}, Message: ${error.error.message}`);
      this.isLoading = false;
    });
  }
  totalCount: number = 0;
  page: number = 1;
  perPage: number = 5;
  selectOptions: number[] = [5, 10, 20, 50];
  constructor(private taskService: TaskService) {
    this.data = [];
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((data: any) => {
      this.data = data;
      this.totalCount = data.length;
      this.isLoading = false;
    });
    this.page = 1;
    this.perPage = 10;
  }

  paginate(page: number) {
    this.page = page;
  }

  perPageChange(perPage: number) {
    this.perPage = perPage;
  }

  async saveTodo(todo: object) {
    this.isLoading = true;
    (await this.taskService.addTask(todo)).subscribe(() => {
      this.taskService.getTasks().subscribe((data: any) => {
        this.data = data;
        this.isLoading = false;
        this.snackbar.open(`New Row Added Successfully!`);
      },
        (error: any) => {
          console.error('Error fetching task:', error);
          this.isLoading = false;
          this.snackbar.open(`Error: ${error.error.error}, Message: ${error.error.message}`);
          this.isLoading = false;
        }
      );
    },
      (error: any) => {
        console.error('Error adding task:', error);
        this.isLoading = false;
        this.snackbar.open(`Error: ${error.error.error}, Message: ${error.error.message}`);
        this.isLoading = false;
      }
    );
  }

  data = [{ id: 1, title: 'some title', status: false }];
  isLoading = true;
}
