import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
    providedIn: 'root'
})
export class RouteGuardServiceService implements CanActivate {
    //implement inbuilt canActivate interface 

    constructor(
        private hardcodedAuthenticationService: HardcodedAuthenticationService,  
         //injected the hardcodeAuthenticationservice to check wheter the user is logged in or not 
        private router : Router
    ) { }

    //if the user is logged out then not give access to the user 
    //else need to give the access.
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.hardcodedAuthenticationService.isUserLoggedIn())
            return true;
        
        this.router.navigate(['login']);  // route to the login page instead of blank page
        return false;
    }


}
