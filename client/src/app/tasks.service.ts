import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  host = 'http://localhost:3000';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private http: HttpClient) {}
  getTasks() {
    return this.http.get(`${this.host}/todos`).pipe(map((res) => res));
  }
  addTask(todo: string) {
    return this.http.post(`${this.host}/todos`, {
      name: todo,
      completed: false,
    });
  }
  deleteTask(id: number) {
    return this.http.delete(`${this.host}/todos/${id}`);
  }
}