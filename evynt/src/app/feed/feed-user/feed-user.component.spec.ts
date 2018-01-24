import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedUserComponent } from './feed-user.component';

describe('FeedUserComponent', () => {
  let component: FeedUserComponent;
  let fixture: ComponentFixture<FeedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
