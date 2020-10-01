import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearServiceComponent } from './near-service.component';

describe('NearServiceComponent', () => {
  let component: NearServiceComponent;
  let fixture: ComponentFixture<NearServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
