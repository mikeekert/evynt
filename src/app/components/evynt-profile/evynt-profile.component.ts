import {Component, OnInit} from '@angular/core';
import {EvyntService} from '../../services/evynt.service';
import {ActivatedRoute} from '@angular/router';
import { Flyer, EvyntResponse } from '../../models/flyer';
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";

@Component({selector: 'app-evynt-profile', templateUrl: './evynt-profile.component.html', styleUrls: ['./evynt-profile.component.scss']})
export class EvyntProfileComponent implements OnInit {
  evyntId: any;
  evyntProfileResp: any;
  Flyer: Flyer;
  Posts = [];

  constructor(private evyntService: EvyntService, private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit() {
    this
      .route
      .queryParams
      .subscribe(params => {
        this.evyntId = params['identifier'];
      });

    this
      .evyntService
      .getEvyntProfile(this.evyntId)
      .subscribe(data => {
        const evyntResponse = new EvyntResponse();
        this.Flyer = new Flyer(data);

        data.posts.forEach((post) => {
          this
            .Posts
            .push(new Post(post));
        })
      });
  }

}
