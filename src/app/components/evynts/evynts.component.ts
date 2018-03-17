import { Component, OnInit } from '@angular/core';
import {Carousel} from "../home/carousel/carousel";
import {EvyntService} from "../../services/evynt.service";
import {Evynt} from "../../models/evynt";

@Component({
  selector: 'app-evynts',
  templateUrl: './evynts.component.html',
  styleUrls: ['./evynts.component.scss']
})
export class EvyntsComponent implements OnInit {
  Evynts: Evynt[] = [];
  constructor(private evyntService: EvyntService) { }

  ngOnInit() {
    this.evyntService
      .get(10,1) //TODO: do something with scrolling to affect paging.
      .subscribe(data => {
        data.forEach((item) =>{
          this
            .Evynts
            .push(new Evynt(item));
        });
      });
  }

}
