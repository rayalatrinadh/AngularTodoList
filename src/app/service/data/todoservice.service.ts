import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(
    public http : HttpClient
  ) { }

  executeGetTodoListService(userName : string){
   return this.http.get<Todo[]>(`http://localhost:8080/todo/getTodoList/${userName}`);
  }

  executeDeleteTodo(username : any,id : any){
    return this.http.delete(`http://localhost:8080/todo/users/${username}/todos/${id}`);
  }

  executeRetriveTodo(username : any, id : any){
    return this.http.get<Todo>(`http://localhost:8080/todo/retrieveTodoList/${username}/todos/${id}`);
  }
}