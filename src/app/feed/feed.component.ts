import {Component, OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {environment} from '../../environments/environment';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {FeedItem} from './feed-item';
import {Location} from './location';

@Component({selector: 'app-feed', templateUrl: './feed.component.html', styleUrls: ['./feed.component.scss']})
export class FeedComponent implements OnInit {
  feed: FeedItem[];
  location: any; // TODO : fix this

  private apiUriBase: string;
  private feedApiUrn: string;

  constructor(private http: AuthHttp) {
    this.apiUriBase = environment.citiskopeApi.baseUrl;
  }

  ngOnInit() {
    // grab coords
    this
      .getPosition()
      .then((position) => {
        this.location = position;
        this
          .getFeed(this.location.coords.longitude, this.location.coords.latitude)
          .subscribe(data => {
            this.feed = data;
            console.log(this.feed);
            console.log(position);
          });
      })
      .catch((err) => {
        this.feed = [];
      });
  }

  getPosition() {
    return new Promise(function (resolve, reject) {
      navigator
        .geolocation
        .getCurrentPosition(resolve, reject);
    });
  }

  getFeed(long, lat) {
    this.getPosition();
    this.feedApiUrn = `api/Post/Latitude/${lat}/Longitude/${long}/PageSize/10/Page/1`;
    const apiUrl = `${this.apiUriBase}/${this.feedApiUrn}`;
    return this
      .http
      .get(apiUrl, {
        headers: new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
      })
      .map(res => res.json().data);
  }
}
