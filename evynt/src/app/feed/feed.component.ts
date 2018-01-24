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
  location : {};

  private feedApiUrn = "api/Post/ByUser/xn4FRYDxwoeXiasmjC6S822xjeU2"; //TODO: update this to /api/Post/Latitude/{latitude}/Longitude/{longitude}/Range/{range}/Minimum/{minimum}
  private apiUriBase : string;

  constructor(private http : AuthHttp) {
    this.apiUriBase = environment.citiskopeApi.baseUrl;
  }

  ngOnInit() {

    // grab coords
    this
      .getPosition()
      .then((position) => {
        this.location = position;
      })
      .catch((err) => {
        // TODO: use error handling for incompatible browsers
      });

    //Gets posts
    this
      .getFeed()
      .subscribe(data => {
        this.feed = data; //TODO: make objects to return to the view
        console.log(this.feed);
      })
  }

  getPosition() {
    return new Promise(function (resolve, reject) {
      navigator
        .geolocation
        .getCurrentPosition(resolve, reject);
    });
  }

  getFeed() {
    const apiUrl = `${this.apiUriBase}/${this.feedApiUrn}`;
    return this
      .http
      .get(apiUrl, {
        headers: new Headers({"Accept": "application/json", "Content-Type": "application/json"})
      })
      .map(res => res.json().data)
  }
}
