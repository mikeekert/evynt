import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvyntProfileComponent } from './evynt-profile.component';

describe('EvyntProfileComponent', () => {
  let component: EvyntProfileComponent;
  let fixture: ComponentFixture<EvyntProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvyntProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvyntProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
