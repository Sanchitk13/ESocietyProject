import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearServiceCategoryComponent } from './near-service-category.component';

describe('NearServiceCategoryComponent', () => {
  let component: NearServiceCategoryComponent;
  let fixture: ComponentFixture<NearServiceCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearServiceCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearServiceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
