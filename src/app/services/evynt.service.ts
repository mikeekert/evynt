import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {environment} from '../../environments/environment';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EvyntService {

  private apiUriBase: string;
  private feedApiUrn: string;

  constructor(private http: AuthHttp) {
    this.apiUriBase = environment.citiskopeApi.baseUrl;
  }

  getFeatured() {
    this.feedApiUrn = `api/Evynt?showFeaturedOnly=true`;
    const apiUrl = `${this.apiUriBase}/${this.feedApiUrn}`;
    return this
      .http
      .get(apiUrl, {
        headers: new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
      })
      .map(res => res.json().data);
  }
}
