import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvyntsComponent} from './evynts.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {EvyntService} from '../../services/evynt.service';
import { FlyerModule } from '../flyer/flyer.module';

@NgModule({
  imports: [
    CommonModule, InfiniteScrollModule, FlyerModule
  ],
  providers: [EvyntService],
  declarations: [EvyntsComponent]
})
export class EvyntsModule {}
