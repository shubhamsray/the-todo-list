import { Component, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { MatSidenav } from '@angular/material/sidenav';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonSharedService } from 'src/app/common-shared.service';

@Component({
  selector: 'app-todo-details-reactive',
  templateUrl: './todo-details-reactive.component.html',
  styleUrls: ['./todo-details-reactive.component.scss']
})
export class TodoDetailsReactiveComponent {
  @Input() todoId: any = '';
  @Input() sidenavReference!: MatSidenav;
  todo: Todo = {
    id: '',
    title: '',
    contents: '',
  };

  todoForm = new FormGroup({
    title: new FormControl(''),
    contents: new FormControl(''),
  });

  constructor(
    private todoService: TodoService,
    private commonSharedService: CommonSharedService
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.initializeTodoForm();
  }

  initializeTodoForm() {
    console.log(this.todoId, 'here');
    if (this.todoId) {
      this.todo = this.todoService.getTodo(this.todoId);
      this.todoForm.controls.title.setValue(this.todo.title);
      this.todoForm.controls.contents.setValue(this.todo.contents);
    }
  }

  saveTodo() {
    this.todo.title = this.todoForm.value.title!;
    this.todo.contents = this.todoForm.value.contents!;
    this.todoService.updateTodo(this.todo.id, this.todo);
    this.closeSidenav();
  }

  closeSidenav() {
    this.todoId = '';
    this.resetForm();
    this.commonSharedService.refreshListSubject.next(true);
    this.sidenavReference.close();
  }

  resetTitle() {
    this.todoForm.controls.title.reset('');
  }

  resetForm() {
    this.todoForm.reset({ title: '', contents: '' });
  }
}

