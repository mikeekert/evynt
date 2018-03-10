import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
  constructor(private auth: AuthService) {}
 
  canActivate() {
    if(this.auth.loggedIn()) {
      return true;
    } else {
      //TODO: for now since we are doing anonymous login just login the user
      // but in the future, send them to the aunauthorized page.
      //this.router.navigate(['unauthorized']);
      this.auth.login();
      return true;
    }
  }
}