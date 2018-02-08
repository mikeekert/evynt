import {Component, OnInit} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {AuthHttp} from 'angular2-jwt';
import {environment} from "../../environments/environment";

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {FeedItem} from './feed-item';

@Component({selector: 'app-feed', templateUrl: './feed.component.html', styleUrls: ['./feed.component.scss']})
export class FeedComponent implements OnInit {
  feed : FeedItem[];
  location : any;

  // TODO: update this to
  // /api/Post/Latitude/{latitude}/Longitude/{longitude}/PageSize/{pagesize}/Page/
  // { page}
  private apiUriBase : string;
  private feedApiUrn : string;

  constructor(private http : AuthHttp) {
    this.apiUriBase = environment.citiskopeApi.baseUrl;
  }

  ngOnInit() {

    // grab coords
    this
      .getPosition()
      .then((position) => {
        this.location = position;
        console.log(this.location.coords)

        this
          .getFeed(this.location.coords.longitude, this.location.coords.latitude)
          .subscribe(data => {
            this.feed = data; //TODO: make objects to return to the view
            console.log(this.feed);
          })
      })
      .catch((err) => {
        // TODO: use error handling for incompatible browsers
      });
  }

  getPosition() {
    return new Promise(function (resolve, reject) {
      navigator
        .geolocation
        .getCurrentPosition(resolve, reject);
    });
  }

  getFeed(lat, long) {
    this.getPosition();
    this.feedApiUrn = "api/Post/Latitude/" + lat + "/Longitude/" + long + "/PageSize/10/Page/1";
    const apiUrl = `${this.apiUriBase}/${this.feedApiUrn}`;
    return this
      .http
      .get(apiUrl, {
        headers: new Headers({"Accept": "application/json", "Content-Type": "application/json", "Access-Control-Allow-Origin":"*"})
      })
      .map(res => res.json().data)
  }
}
