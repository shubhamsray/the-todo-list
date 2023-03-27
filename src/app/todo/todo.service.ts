import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  createTodo(newTodo: Todo): void {
    const todos = this.getAllTodos();
    newTodo.id = (todos.length + 1).toString();
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  getTodo(todoId: string): Todo {
    const todos = this.getAllTodos();
    return todos.find((todo) => todo.id === todoId)!;
  }

  updateTodo(todoId: string, updatedTodo: Todo): void {
    const todos = this.getAllTodos();
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex >= 0) {
      todos.splice(todoIndex, 1, updatedTodo);
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(todoId: string): void {
    const todos = this.getAllTodos();
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex >= 0) {
      todos.splice(todoIndex, 1);
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  getAllTodos(): Todo[] {
    const todos = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos')!)
      : [];
    return todos;
  }

}