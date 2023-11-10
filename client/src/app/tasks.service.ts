import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  host = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getTasks() {
    return this.http.get(`${this.host}/todos`).pipe(map((res) => res));
  }
  async addTask(todo: any) {
    return this.http.post(`${this.host}/todos`, todo);
  }
  async updateTask(todo: any) {
    return this.http.put(`${this.host}/todos/${todo.id}`, todo);
  }
  deleteTask(id: any) {
    return this.http.delete(`${this.host}/todos/${id}`);
  }
}
