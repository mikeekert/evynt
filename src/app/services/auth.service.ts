import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {User} from 'firebase/app';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {
  private user: User;
  constructor(private afAuth: AngularFireAuth) {}
  login() {
    if (!tokenNotExpired()) {
      this.signInToFirebase();
    }

    this
      .afAuth
      .authState
      .subscribe((user: User) => {
        if (user == null) {
          this.signInToFirebase();
        } else {
          this.setUser(user);
        }
      });
  }

  logout(): void {
    this
      .afAuth
      .auth
      .signOut();
    // remove user from local storage to log user out
    localStorage.removeItem('token');
  }

  loggedIn() {
    return tokenNotExpired();
  }
  private signInToFirebase() {
    this
      .afAuth
      .app
      .auth()
      .signInAnonymously()
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode);
        console.error(errorMessage);
        // ...
      });
  }
  private setUser(user: User) {
    user
      .getIdToken()
      .then(token => {
        localStorage.setItem('token', token);
      });
  }
}
