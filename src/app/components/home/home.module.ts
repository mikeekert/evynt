import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CarouselComponent} from './carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {JwtHelper} from 'angular2-jwt';
import {FlyerModule} from '../flyer/flyer.module';
import { FlyerComponent } from '../flyer/flyer.component';

@NgModule({
  imports: [
    CommonModule, NgbModule, FlyerModule
  ],
  declarations: [
    HomeComponent, CarouselComponent, FlyerComponent
  ],
  providers: [JwtHelper],
  exports: [HomeComponent, CarouselComponent]
})
export class HomeModule {}
