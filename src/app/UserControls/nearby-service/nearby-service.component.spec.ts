import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyServiceComponent } from './nearby-service.component';

describe('NearbyServiceComponent', () => {
  let component: NearbyServiceComponent;
  let fixture: ComponentFixture<NearbyServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearbyServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
