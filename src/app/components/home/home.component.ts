import {Component, OnInit, OnDestroy} from '@angular/core';
import {EvyntService} from '../../services/evynt.service';
import {Carousel, ApiEvyntResponse} from './carousel/carousel';
import {Subject} from 'rxjs/Subject';
import {ISubscription} from 'rxjs/Subscription';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']})
export class HomeComponent implements OnInit {
  CarouselFeed: Carousel[] = [];
  Posts: Post[] = [];
  constructor(private evyntService: EvyntService, private postService: PostService) {}

  ngOnInit() {
    this.evyntService
      .getFeatured()
      .subscribe(data => {
        data.forEach(item => {
          this.CarouselFeed.push(new Carousel(item));
          });
      });

    this.postService
      .get(10, 1)
      .subscribe( data => {
        data.forEach(item => {
          this.Posts.push(new Post(item));
        });
      });
  }
}
