import {Component, OnInit, Input} from '@angular/core';
import {EvyntService} from '../../services/evynt.service';
import {Evynt} from '../../models/evynt';
import {Flyer} from '../../models/flyer';

@Component({selector: 'app-evynts', templateUrl: './evynts.component.html', styleUrls: ['./evynts.component.scss']})
export class EvyntsComponent implements OnInit {
  Flyers: Flyer[] = [];
  private pageSize = 10;
  private page = 1;
  constructor(private evyntService: EvyntService) {}

  ngOnInit() {
    this.getEvynts(this.pageSize, this.page);
  }

  onScroll() {
    this.page = ++this.page;
    this.getEvynts(this.pageSize, this.page);
  }

  private getEvynts(pageSize: number, page: number) {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)  => {
        this
          .evyntService
          .get(pageSize, page, position.coords.latitude, position.coords.longitude)
          .subscribe(data => {
            data.forEach((item) => {
              this
                .Flyers
                .push(new Flyer(item));
            });
          });
      });
    }
    else {
      this
        .evyntService
        .get(pageSize, page)
        .subscribe(data => {
          data.forEach((item) => {
            this
              .Flyers
              .push(new Flyer(item));
          });
        });
    }
  }

}
