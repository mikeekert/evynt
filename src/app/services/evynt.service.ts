import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {environment} from '../../environments/environment';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class EvyntService {

  private apiUriBase: string;

  constructor(private http: AuthHttp) {
    this.apiUriBase = environment.citiskopeApi.baseUrl;
  }

  getFeatured() {
    const feedApiUrn = `api/Evynt?ShowFeaturedOnly=true`;
    const apiUrl = `${this.apiUriBase}/${feedApiUrn}`;
    return this
      .http
      .get(apiUrl, {
        headers: new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
      })
      .map(res => res.json().data);
  }

  get(pageSize: number,  page: number, latitude: number = null,  longitude: number = null) {
    let feedApiUrn = `api/Evynt?ShowFeaturedOnly=false&PageSize=${pageSize}&Page=${page}`;

    if (latitude && longitude){
      feedApiUrn += `&Latitude=${latitude}&Longitude=${longitude}`;
    }

    const apiUrl = `${this.apiUriBase}/${feedApiUrn}`;
    return this
      .http
      .get(apiUrl, {
        headers: new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
      })
      .map(res => res.json().data);
  }

  getEvyntProfile(sceneIdentifier: Subscription) {
    const feedApiUrn = `api/Evynt/sceneIdentifier/${sceneIdentifier}`;
    const apiUrl = `${this.apiUriBase}/${feedApiUrn}`;
    return this
      .http
      .get(apiUrl, {
        headers: new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
      })
      .map(res => res.json().data);
    }
}
