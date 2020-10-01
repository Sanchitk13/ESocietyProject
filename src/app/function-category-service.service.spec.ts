import { TestBed } from '@angular/core/testing';

import { FunctionCategoryServiceService } from './function-category-service.service';

describe('FunctionCategoryServiceService', () => {
  let service: FunctionCategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionCategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
