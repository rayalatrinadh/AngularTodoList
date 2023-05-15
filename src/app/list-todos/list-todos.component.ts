import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


//created Todo Class to set the data in an organized way
export class Todo {

  //constructor 
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }



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

  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an Expert at Angular', false, new Date()),
    new Todo(3, 'Visit Restaurent', false, new Date()),
    new Todo(4, 'Hello Trinadh', false, new Date()),
    new Todo(5, 'Welcome to the angular world ', false, new Date())
  ]

  constructor(private route: Router) { }
  ngOnInit(): void {

  }

  goHome() {
    this.route.navigate(['login'])
  }


}
