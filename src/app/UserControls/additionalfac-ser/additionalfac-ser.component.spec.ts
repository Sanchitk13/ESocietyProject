import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalfacSerComponent } from './additionalfac-ser.component';

describe('AdditionalfacSerComponent', () => {
  let component: AdditionalfacSerComponent;
  let fixture: ComponentFixture<AdditionalfacSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalfacSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalfacSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
