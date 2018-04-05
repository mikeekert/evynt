import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ApiUserResponse} from "../models/apiEvyntResponse";

@Injectable()
export class UserService {
  private apiUriBase: string;

  constructor(private http: HttpClient) {
    this.apiUriBase = environment.citiskopeApi.baseUrl;
  }

  getUser(userId: string){
    const feedApiUrn = `api/User/${userId}`;
    const apiUrl = `${this.apiUriBase}/${feedApiUrn}`;
    return this
      .http
      .get<ApiUserResponse>(apiUrl, {
        headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
      });
  }
}
