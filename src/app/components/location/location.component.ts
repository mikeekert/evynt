import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import * as zipcode from 'zipcodes';

@Component({selector: 'app-location', templateUrl: './location.component.html', styleUrls: ['./location.component.scss']})
export class LocationComponent implements OnInit {
  private location: zipcode.ZipCode;

  closeResult: string;
  location_loading: boolean;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    const latitude = localStorage.getItem('latitude');
    const longitude = localStorage.getItem('longitude');

    if (navigator.geolocation) {
      if (latitude == null && longitude == null) {
          navigator.geolocation.getCurrentPosition((position) => {
          localStorage.setItem('latitude', position.coords.latitude.toString());
          localStorage.setItem('longitude', position.coords.longitude.toString());
          this.location = zipcode.lookupByCoords(latitude, longitude);
        });
      } else {
        this.location = zipcode.lookupByCoords(latitude, longitude);
      }
    }
  }

  getLocationByZip(zip: number) {
    this.location = zipcode.lookup(zip);
  }

  changeZip() {
    this.location_loading = true;
    navigator
      .geolocation
      .getCurrentPosition((position) => {
        const latitude = position
          .coords
          .latitude
          .toString();
        const longitude = position
          .coords
          .longitude
          .toString();

        localStorage.setItem('latitude', latitude);
        localStorage.setItem('longitude', longitude);
        this.location = zipcode.lookupByCoords(latitude, longitude);
        this.location_loading = false;
      });
  }

  open(content) {
    this
      .modalService
      .open(content, {
        size: 'sm',
        centered: true
      })
      .result
      .then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
