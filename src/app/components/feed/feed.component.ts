import {Component, OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {environment} from '../../../environments/environment';

import {Observable} from 'rxjs';


import {FeedItem} from './feed-item';
import {Location} from './location';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiEvyntResponse} from "../../models/apiEvyntResponse";
import {ApiPostResponse} from "../../models/post";

@Component({selector: 'app-feed', templateUrl: './feed.component.html', styleUrls: ['./feed.component.scss']})
export class FeedComponent implements OnInit {
  feed: FeedItem[];
  location: any; // TODO : fix this

  private apiUriBase: string;
  private feedApiUrn: string;

  constructor(private http: HttpClient) {
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
            //this.feed = data;
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
      .get<[ApiPostResponse]>(apiUrl, {
      headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
      });
  }
}
