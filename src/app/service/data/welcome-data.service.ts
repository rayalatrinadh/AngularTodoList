import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test1 } from 'src/app/welcome/welcome.component';


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    //alert('hello its alerting on click button');
   return this.http.get<Test1>('http://localhost:8080/hello-world-nikhil');
  }

  executeHelloWorldBeanServiceWithParam(name : String){
    return this.http.get<Test1>(`http://localhost:8080/hello-world-bean/${name}`);
   }
}
