import {Component, OnInit, Input} from '@angular/core';
import {FeedItem} from '../feed-item';

@Component({
  selector: 'app-feed-description',
  templateUrl: './feed-description.component.html',
  styleUrls: ['./feed-description.component.scss']})
export class FeedDescriptionComponent implements OnInit {
  @Input()feed: FeedItem[];
  constructor() {}
  ngOnInit() {}
}
