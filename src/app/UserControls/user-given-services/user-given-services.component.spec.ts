import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGivenServicesComponent } from './user-given-services.component';

describe('UserGivenServicesComponent', () => {
  let component: UserGivenServicesComponent;
  let fixture: ComponentFixture<UserGivenServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGivenServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGivenServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
