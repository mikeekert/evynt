import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvyntProfileComponent} from './evynt-profile.component';
import {FlyerModule} from '../flyer/flyer.module';
import {FeedModule} from '../feed/feed.module';

@NgModule({
  imports: [
    CommonModule,
    FlyerModule,
    FeedModule
  ],
  declarations: [EvyntProfileComponent]
})
export class EvyntProfileModule {}
