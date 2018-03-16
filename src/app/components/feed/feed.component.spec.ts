import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AuthHttp} from 'angular2-jwt';
import { FeedComponent } from './feed.component';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;
  let authHttpSpy: jasmine.SpyObj<AuthHttp>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedComponent ],
      providers: [
        { provide: AuthHttp, useValue: authHttpSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.feed = [];
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
