import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoserviceService } from '../service/data/todoservice.service';


//created Todo Class to set the data in an organized way
export class Todo {

  //constructor 
  constructor(
    // public id: number,
    public userName: string,
    public description: string,
    public date: Date,
    public status: boolean,
    public id : String,
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  //similar to object creating in javaScript; 
  //for sinle value
  // todo = {
  //   id: 1,
  //   description: 'learing Angular toLIst'

  // }

  //todos for multiple values but it is not in organized way
  // todos = [
  //   { id: 1, description: 'learning Angular todoList111' },
  //   { id: 2, description: 'learning Angular todoList2' },
  //   { id: 3, description: 'learning Angular todoList3' },
  //   { id: 4, description: 'learning Angular todoList4' },
  //   { id: 5, description: 'learning Angular todoList5' }
  // ]

  // todos = [
  //   new Todo('trinadh','Learn to Dance with Me', false, new Date()),
  //   new Todo('trinadh','Become an Expert at Angular', false, new Date()),
  //   new Todo('trinadh','Visit Restaurent', false, new Date()),
  //   new Todo('trinadh','Hello Trinadh', false, new Date()),
  //   new Todo('trinadh','Welcome to the angular world ', false, new Date())
  // ]

  todos : Todo[] =[]

  message : String = "";

  constructor(private route: Router,
              private todoserviceService : TodoserviceService
              ) { }
  
  
  
  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoserviceService.executeGetTodoListService("trinadh").subscribe(
      (response: any) => 
      {
        console.log(response),
        this.todos = response
      },
      (error : any) => {
       alert( 'service down') 
      }
    );
  }

  goHome() {
    this.route.navigate(['login'])
  }

  deleteTodo(id : any){
    console.log(`deleted log ${id}`);
    this.todoserviceService.executeDeleteTodo("trinadh",id).subscribe(
      (response : any) => {
        console.log("response : " + response);
        this.message = `id : ${id} Deleted Scuccessful`;
        this.refreshTodos();
      }
    )

   
  }

  updateTodo(id : any){
    console.log(`updated Id : ${id}`);
    this.route.navigate(['update',id])

  }

}
