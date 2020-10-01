import { TestBed } from '@angular/core/testing';

import { NearServiceCategoryServiceService } from './near-service-category-service.service';

describe('NearServiceCategoryServiceService', () => {
  let service: NearServiceCategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NearServiceCategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
