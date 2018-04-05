import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CarouselComponent} from './carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FeedModule} from '../feed/feed.module';
import {EvyntService} from '../../services/evynt.service';
import {PostService} from '../../services/post.service';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FeedModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    CarouselComponent
  ],
  providers: [
    EvyntService,
    PostService
  ],
  exports: [
    HomeComponent,
    CarouselComponent
  ]
})
export class HomeModule {}
