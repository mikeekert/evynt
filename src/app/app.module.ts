import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {NgbModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';


import {environment} from '../environments/environment';
import {JwtModule} from "@auth0/angular-jwt";
import {AppComponent} from './app.component';
import {AppRoutingModule} from '../app/routing/app-routing-module';
import {LayoutModule} from './components/layout/layout.module';

// services
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';

export function tokenGetter(){
    return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.angularJwt.whitelistedDomains,
        blacklistedRoutes: []
      }
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    LayoutModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
