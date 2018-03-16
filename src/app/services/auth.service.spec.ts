import { TestBed, inject } from '@angular/core/testing';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService;
  let angularFireAuth: jasmine.SpyObj<AngularFireAuth>;

  beforeEach(() => {
    let angularFireAuthSpy = jasmine.createSpyObj('AngularFireAuth', ['authState']);
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: angularFireAuthSpy }
      ]
    });

    // Inject both the service-to-test and its (spy) dependency
    angularFireAuth = TestBed.get(AngularFireAuth);

    inject([AuthService], (service: AuthService) => {
      authService = service;
    })();
  });

  it('should be created',() => {
    expect(authService).toBeTruthy();
  });
});
