import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  onCancel() {
    this.todoForm.reset();
  }

  @Output() addTodoFormSubmitted: EventEmitter<object> =
    new EventEmitter<object>();
  todoForm: FormGroup;
  status: boolean = false;
  title: string = '';

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: [this.title, [Validators.required, Validators.minLength(3)]],
      status: [this.status], // Assuming 'status' is a checkbox
    });
  }

  ngOnInit() {}

  async onSubmit() {
    const title = this.todoForm.get('title')!.value; // Non-null assertion
    const status = this.todoForm.get('status')!.value; // Non-null assertion

    // Do something with the values
    await this.addTodoFormSubmitted.emit({ title: title, status: status });
    this.todoForm.reset();
  }
}
