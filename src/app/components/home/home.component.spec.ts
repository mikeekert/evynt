import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {EvyntService} from '../../services/evynt.service';
import {CarouselComponent} from './carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let carouselComponent: CarouselComponent;
  let fixture: ComponentFixture < HomeComponent >;
  let evyntServiceSpy: jasmine.SpyObj < EvyntService >;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('EvyntService', ['getFeatured']);

    TestBed.configureTestingModule({
      imports: [
        CommonModule, NgbModule.forRoot()
      ],
      declarations: [
        HomeComponent, CarouselComponent
      ],
      providers: [
        {
          provide: EvyntService,
          useValue: spy
        }
      ]
    }).compileComponents();

    evyntServiceSpy = TestBed.get(EvyntService);
    evyntServiceSpy
      .getFeatured
      .and
      .returnValue({
        subscribe: () => {}
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    carouselComponent = TestBed
      .createComponent(CarouselComponent)
      .componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getFeatured', () => {
    // arrange act assert
    expect(evyntServiceSpy.getFeatured).toHaveBeenCalled();
  });
});
