import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';
 
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
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          user.getIdToken().then(token => {
            localStorage.setItem('token', token)
          ;});
          location.reload();
        } 
      });
      return false;
    }
  }
}