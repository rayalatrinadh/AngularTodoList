import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoserviceService } from '../service/data/todoservice.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  id : any = '';
  todo : Todo | any;

  constructor(
    private route1 : ActivatedRoute,
    private todoserviceService : TodoserviceService
  ){}

  ngOnInit() {
    console.log(this.id);
     this.id =  this.route1.snapshot.params['id'];
     this.todo = new Todo("","",new Date(),false,"1"); // this is the dummy data for best user experience
     console.log(`id from the list-todo is :  ${this.id}`);
     this.retriveTodo("trinadh",this.id);

}

onDateChange(event: any) {
  // event.target.value will give you the selected date in the 'yyyy-MM-dd' format
  this.todo.date = event.target.value;
}

retriveTodo(username: any, id: any) {
  console.log('hello i am in save functionality');
  this.todoserviceService.executeRetriveTodo(username, id).subscribe(
    (response: any) => {
      // Extract the date part from the server response
      const datePart = response.date.split('T')[0];
      // Assign the extracted date part to todo.date
      this.todo.date = datePart;

      // Other properties assignment as required
      this.todo.description = response.description;
      this.todo.completed = response.completed;
      this.todo.username = response.username;
    },
    (error: any) => {
      alert('service down');
    }
  );
}

}
