import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../models/post';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {
  @Input()
  ShowDeatail = false;

  @Input()
  Posts: Post[];

  constructor() { }

  ngOnInit() {
  }

}
