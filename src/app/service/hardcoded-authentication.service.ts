import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  
  constructor() { }

  authenticate(username: String,password : String)
  {
    
    console.log('before ' + this.isUserLoggedIn());
    if(username == "trinadh" && password == "test"){
      
      sessionStorage.setItem("authenticatedUser","trinadh");
      console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatedUser");
    return !(user === null);
  }

  loggedOut(){
    sessionStorage.removeItem("authenticatedUser");
  }
}
