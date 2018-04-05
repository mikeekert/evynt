import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from "../../services/user.service";
import {ApiUserResponse} from "../../models/apiEvyntResponse";
import {Flyer} from "../../models/flyer";

@Component({selector: 'app-profile', templateUrl: './profile.component.html', styleUrls: ['./profile.component.scss']})
export class ProfileComponent implements OnInit, OnDestroy {
  Flyers: Flyer[] = [];
  id: string;
  UserName: string;
  UserImageUrl: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
        this.id = params['id'];
        this.userService.getUser(this.id).subscribe((data) =>
        {
          this.UserName = data.userName;
          this.UserImageUrl = data.imageUrl;
          data.evynts.forEach((item) => {
            this
              .Flyers
              .push(new Flyer(item));
          });
        });


      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
