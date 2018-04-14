import {Component, OnInit, Input} from '@angular/core';
import {EvyntService} from '../../services/evynt.service';
import {Flyer} from '../../models/flyer';

@Component({selector: 'app-evynts', templateUrl: './evynts.component.html', styleUrls: ['./evynts.component.scss']})
export class EvyntsComponent implements OnInit {
  Flyers: Flyer[] = [];
  private pageSize = 5;
  private page = 1;

  constructor(private evyntService: EvyntService) {
  }

  ngOnInit() {
    this.getEvynts();
  }

  onScroll() {
    this.page = ++this.page;
    this.getEvynts();
  }

  private getEvynts() {
    let latitude = localStorage.getItem("latitude");
    let longitude = localStorage.getItem("longitude");

    if (navigator.geolocation) {

      if (latitude == null && longitude == null) {
        navigator.geolocation.getCurrentPosition((position) => {
          localStorage.setItem('latitude', position.coords.latitude.toString());
          localStorage.setItem('longitude', position.coords.longitude.toString());
          this.getEvyntWithLocation(position.coords.latitude, position.coords.longitude);
        });
      }
      else {
        this.getEvyntWithLocation(Number(latitude), Number(longitude));
      }
    }
    else {
      this.evyntService.get(this.pageSize, this.page).subscribe(response => {
        response.data.forEach((item) => {
            this
              .Flyers
              .push(new Flyer(item));
          });
        });
    }
  }

  private getEvyntWithLocation(latitude: number, longitude: number) {
    this.evyntService.get(this.pageSize, this.page, latitude, longitude).subscribe(response => {
      response.data.forEach((item) => {
          this
            .Flyers
            .push(new Flyer(item));
        });
      });
  }

}
