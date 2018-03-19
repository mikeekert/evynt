import {Component, OnInit, Input} from '@angular/core';
import {Flyer} from '../../../models/flyer';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({selector: 'app-carousel', templateUrl: './carousel.component.html', styleUrls: ['./carousel.component.scss']})
export class CarouselComponent implements OnInit {
  @Input()CarouselFeed: Flyer;

  ngOnInit() {}

}
