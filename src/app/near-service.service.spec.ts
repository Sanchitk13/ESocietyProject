import { TestBed } from '@angular/core/testing';

import { NearServiceService } from './near-service.service';

describe('NearServiceService', () => {
  let service: NearServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NearServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
