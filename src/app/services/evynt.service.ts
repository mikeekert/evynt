import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {environment} from '../../environments/environment';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiEvyntResponse} from "../models/apiEvyntResponse";
import {ApiResponse} from "../models/post";

@Injectable()
export class EvyntService {

  private apiUriBase: string;

  constructor(private http: HttpClient) {
    this.apiUriBase = environment.citiskopeApi.baseUrl;
  }

  getFeatured() {
    const feedApiUrn = `api/Evynt?ShowFeaturedOnly=true`;
    const apiUrl = `${this.apiUriBase}/${feedApiUrn}`;
    return this
      .http
      .get<ApiResponse<[ApiEvyntResponse]>>(apiUrl, {
        headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
      });
  }

  get(pageSize: number,  page: number, latitude: number = null,  longitude: number = null) {
    let feedApiUrn = `api/Evynt?ShowFeaturedOnly=false&PageSize=${pageSize}&Page=${page}`;

    if (latitude && longitude){
      feedApiUrn += `&Latitude=${latitude}&Longitude=${longitude}`;
    }

    const apiUrl = `${this.apiUriBase}/${feedApiUrn}`;
    return this
      .http
      .get<ApiResponse<[ApiEvyntResponse]>>(apiUrl, {
        headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
      });
  }

  getEvyntProfile(sceneIdentifier: Subscription) {
    const feedApiUrn = `api/Evynt/sceneIdentifier/${sceneIdentifier}`;
    const apiUrl = `${this.apiUriBase}/${feedApiUrn}`;
    return this
      .http
      .get<ApiResponse<ApiEvyntResponse>>(apiUrl, {
        headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
      });
    }
}
