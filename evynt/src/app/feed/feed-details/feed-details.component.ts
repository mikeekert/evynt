import {Component, OnInit, Input} from '@angular/core';
import {FeedItem} from '../feed-item';

@Component({selector: 'app-feed-details', templateUrl: './feed-details.component.html', styleUrls: ['./feed-details.component.scss']})
export class FeedDetailsComponent implements OnInit {
  @Input()feed : FeedItem[];

  constructor() {}

  ngOnInit() {}

}
