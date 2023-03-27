import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent {
  todo: Todo = {
    id: '',
    title: '',
    contents: '',
  };

  isEditMode = false;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.todo.id = this.activatedRoute.snapshot.params['id'];
    this.isEditMode = !!this.todo.id;
    if (this.isEditMode) {
      this.todo = this.todoService.getTodo(this.todo.id);
    } else {
      this.todo = {
        id: '',
        title: '',
        contents: '',
      };
    }
  }

  saveTodo() {
    if (this.isEditMode) {
      this.todoService.updateTodo(this.todo.id, this.todo);
    } else {
      this.todoService.createTodo(this.todo);
    }
    this.router.navigateByUrl('todo/list');

  }

  
  todoSave(todo: Todo){
    this.apiService.createAndStoreTodo(todo.id, todo.title, todo.contents)
  }
}

