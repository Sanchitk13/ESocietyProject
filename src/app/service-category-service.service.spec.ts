import { TestBed } from '@angular/core/testing';

import { ServiceCategoryServiceService } from './service-category-service.service';

describe('ServiceCategoryServiceService', () => {
  let service: ServiceCategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
