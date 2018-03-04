import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CarouselComponent} from './carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {JwtHelper} from 'angular2-jwt';

@NgModule({
  imports: [
    CommonModule, NgbModule
  ],
  declarations: [
    HomeComponent, CarouselComponent
  ],
  providers: [JwtHelper],
  exports: [HomeComponent, CarouselComponent]
})
export class HomeModule {}
