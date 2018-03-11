import { TestBed, inject } from '@angular/core/testing';

import {AuthHttp} from 'angular2-jwt';
import { EvyntService } from './evynt.service';

describe('EvyntService', () => {
  let evyntService: EvyntService;
  let authHttpSpy: jasmine.SpyObj<AuthHttp>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EvyntService,
        { provide: AuthHttp, useValue: authHttpSpy}
      ]
    });

    evyntService = TestBed.get(EvyntService);
    authHttpSpy = TestBed.get(AuthHttp);
  });

  it('should be created', inject([EvyntService], (service: EvyntService) => {
    expect(service).toBeTruthy();
  }));
});
