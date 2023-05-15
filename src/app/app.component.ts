import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  //edited by RT
 // template : '<h1>welcome trinadh {{title}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  welcomeMsg = "welcome to Angular";
}