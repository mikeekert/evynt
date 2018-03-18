import { Component, OnInit } from '@angular/core';
import {EvyntService} from '../../services/evynt.service';
import {Evynt} from '../../models/evynt';

@Component({
  selector: 'app-evynts',
  templateUrl: './evynts.component.html',
  styleUrls: ['./evynts.component.scss']
})
export class EvyntsComponent implements OnInit {
  Evynts: Evynt[] = [];
  private pageSize = 10;
  private page = 1;
  constructor(private evyntService: EvyntService) { }

  ngOnInit() {
    this.getEvynts(this.pageSize, this.page);
  }

  onScroll() {
    this.page = ++this.page;
    this.getEvynts(this.pageSize, this.page);
  }

  private getEvynts(pageSize: number,  page: number) {
    this.evyntService
      .get(pageSize, page)
      .subscribe(data => {
        data.forEach((item) => {
          this
            .Evynts
            .push(new Evynt(item));
        });
      });
  }

}
