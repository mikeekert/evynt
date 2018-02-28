import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({selector: 'app-profile', templateUrl: './profile.component.html', styleUrls: ['./profile.component.scss']})
export class ProfileComponent implements OnInit,
OnDestroy {

  constructor(private route: ActivatedRoute) {}
  id: number;
  private sub: any;

  ngOnInit() {
    this.sub = this
      .route
      .params
      .subscribe(params => {
        this.id = +params['id'];
      });
  }

  ngOnDestroy() {
    this
      .sub
      .unsubscribe();
  }
}
