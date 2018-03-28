import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvyntProfileComponent} from './evynt-profile.component';
import {FlyerModule} from '../flyer/flyer.module';

@NgModule({
  imports: [
    CommonModule,
    FlyerModule
  ],
  declarations: [EvyntProfileComponent]
})
export class EvyntProfileModule {}
