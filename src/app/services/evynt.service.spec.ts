import { TestBed, inject } from '@angular/core/testing';

import { EvyntService } from './evynt.service';

describe('EvyntService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvyntService]
    });
  });

  it('should be created', inject([EvyntService], (service: EvyntService) => {
    expect(service).toBeTruthy();
  }));
});
