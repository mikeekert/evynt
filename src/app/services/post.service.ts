import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiPagedResponse, ApiPostResponse} from "../models/post";

@Injectable()
export class PostService {

  private apiUriBase: string;

  constructor(private http: HttpClient) {
    this.apiUriBase = environment.citiskopeApi.baseUrl;
  }

  get(pageSize: number, page: number) {
    const feedApiUrn = `api/Post/PageSize/${pageSize}/Page/${page}`;
    const apiUrl = `${this.apiUriBase}/${feedApiUrn}`;
    return this
      .http
      .get<ApiPagedResponse<ApiPostResponse[]>>(apiUrl, {
        headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
      });
  }

  getByEvynt(identifier: string, pageSize: number, page: number) {
    //TODO: in the future this should page.
    const feedApiUrn = `api/Post/ByEvynt/${identifier}`;
    const apiUrl = `${this.apiUriBase}/${feedApiUrn}`;
    return this
      .http
      .get<ApiPostResponse>(apiUrl, {
        headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
      });
  }
}
