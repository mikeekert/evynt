import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FlyerComponent } from './flyer.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({imports: [CommonModule, RouterModule], declarations: [FlyerComponent], exports: [FlyerComponent]})
export class FlyerModule {}
