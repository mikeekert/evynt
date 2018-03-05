import {Component, OnInit, Input} from '@angular/core';
import {Carousel} from '../carousel/carousel';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({selector: 'app-carousel', templateUrl: './carousel.component.html', styleUrls: ['./carousel.component.scss']})
export class CarouselComponent implements OnInit {
  @Input()CarouselFeed: Carousel;

  ngOnInit() {}

}
