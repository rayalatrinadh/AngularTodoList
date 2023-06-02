import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { Subscriber } from 'rxjs';

//import {AppComponent} from '../app.component'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
//export is like a public modifier in java 
//created a welcome component 
export class WelcomeComponent implements OnInit{
  
  //declare component variables with initialization.
  message : string = "hello trinadh how are you";
  welcomeMessageFromService : String = "";
  name = '';
  showWelcomeMessageFromService : boolean = false;


//constructon
//in angular constructor variables available at component level. no need to declare local like this.val = val
  constructor(
    private route : Router,
    private route1 : ActivatedRoute,
    private service : WelcomeDataService){


  }

  // ngOnInit():void{}
  ngOnInit() {
    console.log(this.message);
     this.name =  this.route1.snapshot.params['name']
    console.log(this.route1.snapshot.params['name']);
    console.log('name : ' ,this.name)
  }


  getWelcomeMessage(){
   console.log("log in app.module.ts");
    console.log(this.service.executeHelloWorldBeanService());
    console.log("above this.service.executeHelloWorldBeanService()");
   console.log("message from subscribe which is asynchronous : ");
   this.service.executeHelloWorldBeanService().subscribe(
    response => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
   );
    

   console.log('last line ');
  }

  getWelcomeMessageWithParam(){
    console.log("getWelcomeMessageWithParam() Calling in welcome.component.ts service");
    this.service.executeHelloWorldBeanServiceWithParam(this.name).subscribe(
      responseWithParam => this.handleSuccessfulResponseWithParam(responseWithParam)
    )
  }


  handleSuccessfulResponse(response : any){
    this.showWelcomeMessageFromService = true;
    console.log("in welcome.component.ts file -> handleSuccessfulResponse method ");
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error : any){
    console.log("in welcome.component.ts file -> handleErrorResponse method ");
    this.showWelcomeMessageFromService = true;
    this.welcomeMessageFromService =error.error.message;
    
  }

  handleSuccessfulResponseWithParam(responseWithParam : any){
       this.showWelcomeMessageFromService = true;
       this.welcomeMessageFromService = responseWithParam.message;

      console.log("response with param : "+responseWithParam);
  }

}



//if you want, u can create n number of classes 
export class Test1{

  constructor(public message1:  String){
  }

}

export class Test2{


}

export class Test3{

}

export class Test4{


}
