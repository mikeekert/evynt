import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiUserResponse} from "../../models/apiEvyntResponse";
import {Flyer} from "../../models/flyer";
import {EvyntService} from "../../services/evynt.service";

@Component({selector: 'app-profile', templateUrl: './profile.component.html', styleUrls: ['./profile.component.scss']})
export class ProfileComponent implements OnInit, OnDestroy {
  Flyers: Flyer[] = [];
  id: string;
  UserName: string;
  UserImageUrl: string;

  private pageSize = 5;
  private page = 1;

  private sub: any;

  constructor(private route: ActivatedRoute, private evyntService: EvyntService) {}

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
        this.id = params['id'];
        this.getEvynts();
      });
  }

  onScroll() {
    this.page = ++this.page;
    this.getEvynts();
  }

  getEvynts(){
    this.evyntService.getByUser(this.id, this.pageSize, this.page).subscribe((response) =>
    {
      let evynt = response.data[0];
      this.UserName = evynt.postedBy;
      this.UserImageUrl = evynt.userImageUrl;
      response.data.forEach((item) => {
        this
          .Flyers
          .push(new Flyer(item));
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
