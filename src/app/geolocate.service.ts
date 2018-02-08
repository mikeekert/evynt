import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GeolocateService {

  constructor(private http : HttpClient) {}

}