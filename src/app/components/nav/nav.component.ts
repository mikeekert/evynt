import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({selector: 'app-nav', templateUrl: './nav.component.html', styleUrls: ['./nav.component.scss']})

export class NavComponent implements OnInit {
  private active = false;

  clickEvent() {
    this.active = !this.active;
  }
  ngOnInit() {}
}
