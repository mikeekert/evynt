import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvyntsComponent } from './evynts.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule
  ],
  declarations: [EvyntsComponent]
})
export class EvyntsModule { }
