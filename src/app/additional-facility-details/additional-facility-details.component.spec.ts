import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalFacilityDetailsComponent } from './additional-facility-details.component';

describe('AdditionalFacilityDetailsComponent', () => {
  let component: AdditionalFacilityDetailsComponent;
  let fixture: ComponentFixture<AdditionalFacilityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalFacilityDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalFacilityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
