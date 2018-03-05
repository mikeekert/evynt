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
import {EvyntService} from './services/evynt.service';

@NgModule({
  declarations: [
    AppComponent, NavComponent
  ],
  imports: [
    BrowserModule, HttpModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AuthModule,
    AppRoutingModule,
    EvyntsModule,
    ProfileModule,
    HomeModule,
    NgbModule.forRoot()
  ],
  providers: [JwtHelper, EvyntService],
  bootstrap: [AppComponent]
})
export class AppModule {}
