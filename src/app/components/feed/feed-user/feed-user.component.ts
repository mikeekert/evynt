import {Component, OnInit, Input} from '@angular/core';
import {FeedItem} from '../feed-item';

@Component({selector: 'app-feed-user', templateUrl: './feed-user.component.html', styleUrls: ['./feed-user.component.scss']})
export class FeedUserComponent implements OnInit {
  @Input()feed: FeedItem[];

  constructor() {}

  ngOnInit() {}

}
