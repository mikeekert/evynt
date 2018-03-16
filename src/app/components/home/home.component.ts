import {Component, OnInit, OnDestroy} from '@angular/core';
import {EvyntService} from '../../services/evynt.service';
import {Carousel, ApiEvyntResponse} from './carousel/carousel';
import {Subject} from 'rxjs/Subject';
import {ISubscription} from 'rxjs/Subscription';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']})
export class HomeComponent implements OnInit {
  CarouselFeed: Carousel[] = [];
  constructor(private evyntService: EvyntService) {}

  ngOnInit() {
    this.evyntService
      .getFeatured()
      .subscribe(data => {
        for (let i = 0; i < data.length; i++) {
          this
            .CarouselFeed
            .push(new Carousel(data[i]));
        }
      });
  }
}
