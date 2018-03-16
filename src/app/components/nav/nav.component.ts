import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navbarCollapsed = true;
  constructor(router: Router) {
    router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      const { fragment } = router.parseUrl(router.url);
      if (fragment) {
        const element = document.querySelector(`#${fragment}`);
        if (element) {
          element.scrollIntoView();
        }
      }
    }
  });
}

  ngOnInit() {
  }

}
