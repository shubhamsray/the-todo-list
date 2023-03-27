import { Injectable } from '@angular/core';
import { Todo } from '../app/todo/todo.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  createAndStoreTodo(id: string, title: string , contents: string){
   const todo:Todo  = { id:id , title: title, contents: contents}
     this.http.post<{name: string}>('https://angular-todo-app-becb4-default-rtdb.firebaseio.com/post.json',todo).subscribe(response => {
      console.log(response);
      
     })
  }

  todoFetch(){
   return this.http.get<{[key : string]: Todo}>('https://angular-todo-app-becb4-default-rtdb.firebaseio.com/post.json').pipe(map(responseData => {
    const todoArr: Todo [] = [];
    for(const key in responseData){
      if(responseData.hasOwnProperty(key)){
        todoArr.push({...responseData[key], id: key })
      }
    }
    return todoArr;
   }))
  }


  todoDelete(id: string){
    return this.http.delete(`https://angular-todo-app-becb4-default-rtdb.firebaseio.com/post/${id}.json`)
  }


  todoPut(id: string ,todo: Todo){
    return this.http.patch(`https://angular-todo-app-becb4-default-rtdb.firebaseio.com/post/${id}.json`, todo)
  }


  todoFetchId(id: string){
    return this.http.get(`https://angular-todo-app-becb4-default-rtdb.firebaseio.com/post/${id}.json`)

  }
}
