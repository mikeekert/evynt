import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvyntsComponent } from './evynts.component';

describe('EvyntsComponent', () => {
  let component: EvyntsComponent;
  let fixture: ComponentFixture<EvyntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvyntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvyntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
