import { TestBed, inject } from '@angular/core/testing';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;
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
    authService = TestBed.get(AuthService);
    angularFireAuth = TestBed.get(AngularFireAuth);
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
