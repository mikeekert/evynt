import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Evynt';
  
  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe( val => {
      if(val == null){
        afAuth.app.auth().signInAnonymously().catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error(errorCode);
          console.error(errorMessage);
          // ...
        });
      }
      else{
        let user = val as User;
        user.getIdToken().then(token => {
          localStorage.setItem('token', token);
        })
      }
    });
  }
}
