import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import * as zipcode from 'zipcodes';

@Component({selector: 'app-location', templateUrl: './location.component.html', styleUrls: ['./location.component.scss']})
export class LocationComponent implements OnInit {
  private location: zipcode.ZipCode;

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    const latitude = localStorage.getItem('latitude');
    const longitude = localStorage.getItem('longitude');
  }

  getLocationByZip(zip: string) {
    this.location = zipcode.lookup(zip);
  }

  changeZip() {
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
      });
      console.log(this.location);
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
