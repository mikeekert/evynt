import {Component, OnInit} from '@angular/core';

import * as zipcode from 'zipcodes';

@Component({selector: 'app-location', templateUrl: './location.component.html', styleUrls: ['./location.component.scss']})
export class LocationComponent implements OnInit {
  private location: zipcode.ZipCode;

  constructor() {}

  ngOnInit() {
    let latitude = localStorage.getItem('latitude');
    let longitude = localStorage.getItem('longitude');

    if (navigator.geolocation) {
      if (latitude == null && longitude == null) {
        navigator
          .geolocation
          .getCurrentPosition((position) => {
            latitude = position.coords.latitude.toString();
            longitude = position.coords.longitude.toString();

            localStorage.setItem('latitude', latitude);
            localStorage.setItem('longitude', longitude);
            this.location = zipcode.lookupByCoords(latitude, longitude);
          });
      } else {
        this.location = zipcode.lookupByCoords(latitude, longitude);
      }
    }
  }
  getLocationByZip(zip: string) {
    this.location = zipcode.lookup(zip);
  }
}
