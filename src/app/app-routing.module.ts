import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouteGuardServiceService } from './service/route-guard-service.service';

const routes: Routes = [
  //need to add path for every component to navigate to the required component
  {path : '',component : LoginComponent},
  {path :'login',component : LoginComponent},
  {path : 'welcome/:name', component : WelcomeComponent, canActivate:[RouteGuardServiceService]},  //passing params welcome/:name
  {path : 'todos', component : ListTodosComponent, canActivate:[RouteGuardServiceService]},
  {path: 'logout', component : LogoutComponent, canActivate:[RouteGuardServiceService]},


  {path: '**', component : ErrorComponent} //note by trinadh : error path should be at  ** last** 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }