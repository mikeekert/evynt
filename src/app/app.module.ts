import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {environment} from '../environments/environment';
import {AuthModule} from './app-auth.module';

import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';

import {FeedModule} from '../app/components/feed/feed.module';
import {AppRoutingModule} from '../app/routing/app-routing-module';
import {EvyntsModule} from './components/evynts/evynts.module';
import {ProfileModule} from './components/profile/profile.module';
import {HomeModule} from './components/home/home.module';


// services
import {JwtHelper} from 'angular2-jwt';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {EvyntService} from './services/evynt.service';
import { FlyerModule } from './components/flyer/flyer.module';

@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AuthModule,
    AppRoutingModule,
    EvyntsModule,
    ProfileModule,
    HomeModule,
    FlyerModule,
    NgbModule.forRoot()
  ],
  providers: [
    JwtHelper,
    AuthService,
    AuthGuardService,
    EvyntService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
