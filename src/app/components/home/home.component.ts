import {Component, OnInit} from '@angular/core';
import {EvyntService} from '../../services/evynt.service';
import {Carousel} from './carousel/carousel';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']})
export class HomeComponent implements OnInit {
  carousel: Carousel[] = [];
  data: [
    {
      'url': '',
      'title': '',
      'desc': ''
    }, {
      'url': '',
      'title': '',
      'desc': ''
    }, {
      'url': '',
      'title': '',
      'desc': ''
    }
  ];

  constructor(evyntService: EvyntService) {}

  ngOnInit() {}

}
