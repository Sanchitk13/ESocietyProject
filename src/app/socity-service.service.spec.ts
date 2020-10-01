import { TestBed } from '@angular/core/testing';

import { SocityServiceService } from './socity-service.service';

describe('SocityServiceService', () => {
  let service: SocityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
