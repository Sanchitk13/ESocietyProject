import { TestBed } from '@angular/core/testing';

import { CheckAuthGuardServiceService } from './check-auth-guard-service.service';

describe('CheckAuthGuardServiceService', () => {
  let service: CheckAuthGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckAuthGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
