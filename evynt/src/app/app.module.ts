import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthModule } from './/app-auth.module';

//services
import { JwtHelper } from 'angular2-jwt';
import { FeedDetailsComponent } from './feed/feed-details/feed-details.component';
import { FeedUserComponent } from './feed/feed-user/feed-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    FeedDetailsComponent,
    FeedUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AuthModule
  ],
  providers: [JwtHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
