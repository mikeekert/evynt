import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLayoutComponent } from './basic-layout.component';
import { NavComponent } from '../../nav/nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbCollapse, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

describe('BasicLayoutComponent', () => {
  let component: BasicLayoutComponent;
  let fixture: ComponentFixture<BasicLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BasicLayoutComponent,
        NavComponent
      ],
      imports: [
        RouterTestingModule,
        NgbCollapseModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
