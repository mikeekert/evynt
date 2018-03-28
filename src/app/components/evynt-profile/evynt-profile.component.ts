import {Component, OnInit} from '@angular/core';
import {EvyntService} from '../../services/evynt.service';
import {ActivatedRoute} from '@angular/router';
import { Flyer, EvyntResponse } from '../../models/flyer';

@Component({selector: 'app-evynt-profile', templateUrl: './evynt-profile.component.html', styleUrls: ['./evynt-profile.component.scss']})
export class EvyntProfileComponent implements OnInit {
  evyntProfile: any;
  evyntProfileResp: any;
  Flyer: Flyer;

  constructor(private evyntService: EvyntService, private route: ActivatedRoute, ) {}

  ngOnInit() {
    const identifier = this
      .route
      .queryParams
      .subscribe(params => {
        this.evyntProfile = params['identifier'];
      });

    this
      .evyntService
      .getEvyntProfile(this.evyntProfile)
      .subscribe(data => {
        const evyntResponse = new EvyntResponse();
        evyntResponse.imageUrl = data.imageUrl;
        evyntResponse.description = data.description;
        evyntResponse.isFeatured = data.isFeatured;
        evyntResponse.sceneIdentifier = data.sceneIdentifier;
        this.Flyer = new Flyer(evyntResponse);
      });
  }

}
