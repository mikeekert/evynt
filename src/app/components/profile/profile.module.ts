import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {FlyerModule} from "../flyer/flyer.module";
import {EvyntService} from "../../services/evynt.service";
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  imports: [
    CommonModule,
    FlyerModule,
    InfiniteScrollModule
  ],
  declarations: [ProfileComponent],
  providers: [
    EvyntService
    ]
})
export class ProfileModule { }
