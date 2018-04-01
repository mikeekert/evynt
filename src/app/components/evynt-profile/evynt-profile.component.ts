import {Component, OnInit} from '@angular/core';
import {EvyntService} from '../../services/evynt.service';
import {ActivatedRoute} from '@angular/router';
import { Flyer } from '../../models/flyer';
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";
import {Meta} from "@angular/platform-browser";

@Component({selector: 'app-evynt-profile', templateUrl: './evynt-profile.component.html', styleUrls: ['./evynt-profile.component.scss']})
export class EvyntProfileComponent implements OnInit {
  evyntId: any;
  Flyer: Flyer;
  Posts = [];

  constructor(private evyntService: EvyntService, private route: ActivatedRoute, private postService: PostService, private meta: Meta) {}

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
        this.Flyer = new Flyer(data);

        data.posts.forEach((post) => {
          this
            .Posts
            .push(new Post(post));
        })
      });
  }

}
