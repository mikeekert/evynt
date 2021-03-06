import {Component, OnInit, Input} from '@angular/core';
import {Flyer} from '../../models/flyer';
import {Router, ActivatedRoute} from '@angular/router';

@Component({selector: 'app-flyer', templateUrl: './flyer.component.html', styleUrls: ['./flyer.component.scss']})
export class FlyerComponent implements OnInit {

  @Input()
  Flyer: Flyer;

  @Input()
  ShowProfileLink: boolean;

  @Input()
  ShowShortDescription = false;

  @Input()
  ShowProfileImage = true;

  constructor() {}

  ngOnInit() {
  }

}
