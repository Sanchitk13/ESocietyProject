import { TestBed } from '@angular/core/testing';

import { AvailableSlotsServiceService } from './available-slots-service.service';

describe('AvailableSlotsServiceService', () => {
  let service: AvailableSlotsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableSlotsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
