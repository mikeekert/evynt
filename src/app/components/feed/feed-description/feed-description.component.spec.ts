import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedDescriptionComponent } from './feed-description.component';

describe('FeedDescriptionComponent', () => {
  let component: FeedDescriptionComponent;
  let fixture: ComponentFixture<FeedDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.feed = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
