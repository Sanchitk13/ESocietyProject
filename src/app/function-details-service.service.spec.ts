import { TestBed } from '@angular/core/testing';

import { FunctionDetailsServiceService } from './function-details-service.service';

describe('FunctionDetailsServiceService', () => {
  let service: FunctionDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
