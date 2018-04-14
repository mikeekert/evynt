import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FlyerComponent } from './flyer.component';
import { RouterModule, Routes } from '@angular/router';
import {MomentModule} from "angular2-moment";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MomentModule
  ],
  declarations: [FlyerComponent]
  , exports: [FlyerComponent]})
export class FlyerModule {}
