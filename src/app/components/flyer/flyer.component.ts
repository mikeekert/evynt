import {Component, OnInit, Input } from '@angular/core';
import {Flyer} from '../../models/flyer';

@Component({selector: 'app-flyer', templateUrl: './flyer.component.html', styleUrls: ['./flyer.component.scss']})
export class FlyerComponent implements OnInit {

  @Input()Flyers: Flyer;

  constructor() {}

  ngOnInit() {}

}
