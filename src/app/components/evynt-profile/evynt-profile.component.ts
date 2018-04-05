import {Component, OnInit} from '@angular/core';
import {EvyntService} from '../../services/evynt.service';
import {ActivatedRoute} from '@angular/router';
import { Flyer } from '../../models/flyer';
import {Post} from "../../models/post";

@Component({selector: 'app-evynt-profile', templateUrl: './evynt-profile.component.html', styleUrls: ['./evynt-profile.component.scss']})
export class EvyntProfileComponent implements OnInit {
  evyntId: any;
  Flyer: Flyer;
  Posts = [];

  constructor(private evyntService: EvyntService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.evyntId = params['identifier'];
      });

    this
      .evyntService.getEvyntProfile(this.evyntId).subscribe(response => {
        this.Flyer = new Flyer(response.data);

      response.data.posts.forEach((post) => {
          this
            .Posts
            .push(new Post(post));
        })
      });
  }

}
