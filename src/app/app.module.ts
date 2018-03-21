import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {NgbModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';


import {environment} from '../environments/environment';
import {AuthModule} from './app-auth.module';

import {AppComponent} from './app.component';
import {AppRoutingModule} from '../app/routing/app-routing-module';
import {LayoutModule} from './components/layout/layout.module';

// services
import {JwtHelper} from 'angular2-jwt';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {EvyntService} from './services/evynt.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AuthModule,
    LayoutModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NgbDropdownModule
  ],
  providers: [
    JwtHelper,
    AuthService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
