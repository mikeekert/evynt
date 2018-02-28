import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {AuthModule} from './/app-auth.module';
import {FeedModule} from './feed/feed.module';
import {AppRoutingModule} from '../app/routing/app-routing-module';

// services
import {JwtHelper} from 'angular2-jwt';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, HttpModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AuthModule,
    FeedModule,
    AppRoutingModule
  ],
  providers: [JwtHelper],
  bootstrap: [AppComponent]
})
export class AppModule {}
