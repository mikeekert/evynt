import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

describe('AuthGuardService', () => {
  let authGuardService: AuthGuardService;
  let authGuardServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['canActivate'])
    TestBed.configureTestingModule({
      providers: [
        AuthGuardService,
        { provide: AuthService, useValue: authServiceSpy }
      ]
    });

    // Inject both the service-to-test and its (spy) dependency
    authGuardService = TestBed.get(AuthGuardService);
    authGuardServiceSpy = TestBed.get(AuthService);
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
