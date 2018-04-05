import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.loggedIn()) {
      return true;
    } else {
      // TODO: for now since we are doing anonymous login just login the user but in
      // the future, send them to the aunauthorized page.
      // this.router.navigate(['unauthorized']);
      this.auth.login();
      firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            localStorage.clear();
            // User is signed in.
            user.getIdToken().then(token => {
                localStorage.setItem('token', token);
              });
            this.router.navigateByUrl(state.url);
          }
        });
      return false;
    }
  }
}
