import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  //component attributes... 
  userName = 'trinadh';
  password  = 'test';
  invalidLogin = false;
  errorMessage = 'InvalidCredentials';

  //Router
  //Angular.giveMeRouter
  //dependencyInjection
  constructor(
    private router: Router,
    private hardCodedAuthenticationService : HardcodedAuthenticationService         
    ){

  }

  ngOnInit(): void {
    
  }

  //component is nothing but a class
  //method in LoginComponent component -> event : button in html
  handleLogin(){

   // if(this.userName === 'trinadh' && this.password === 'test'){
    if(this.hardCodedAuthenticationService.authenticate(this.userName,this.password)){
      this.invalidLogin = false;
      //how to route from login component to welcome component 
      this.router.navigate(['welcome',this.userName])
    }else{
      this.invalidLogin = true;
    }
  }
}
