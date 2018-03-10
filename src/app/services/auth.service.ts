import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from 'firebase/app';
import { environment } from '../../environments/environment';

@Injectable()
  export class AuthService {

    constructor(private afAuth: AngularFireAuth) { }

    login() {
      this.afAuth.authState.subscribe( val => {
        if (val == null) {
          this.afAuth.app.auth().signInAnonymously().catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode);
            console.error(errorMessage);
            // ...
          });
        } else {
          const user = val as User;
          user.getIdToken().then(token => {
            localStorage.setItem('token', token);
          });
        }
      });
    }

    logout(): void {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
    }

    loggedIn() {
      return tokenNotExpired();
    }
}