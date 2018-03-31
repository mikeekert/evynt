import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {environment} from '../../environments/environment';
import {Headers} from '@angular/http';

@Injectable()
export class PostService {

  private apiUriBase: string;

  constructor(private http: AuthHttp) {
    this.apiUriBase = environment.citiskopeApi.baseUrl;
  }

  get(pageSize: number, page: number) {
    const feedApiUrn = `api/Post/PageSize/${pageSize}/Page/${page}`;
    const apiUrl = `${this.apiUriBase}/${feedApiUrn}`;
    return this
      .http
      .get(apiUrl, {
        headers: new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
      })
      .map(res => res.json().data);
  }

  getByEvynt(identifier: string, pageSize: number, page: number) {
    const feedApiUrn = `api/Post/ByEvynt/${identifier}`;
    const apiUrl = `${this.apiUriBase}/${feedApiUrn}`;
    return this
      .http
      .get(apiUrl, {
        headers: new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
      })
      .map(res => res.json().data);
  }
}
