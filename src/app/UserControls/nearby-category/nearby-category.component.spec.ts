import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyCategoryComponent } from './nearby-category.component';

describe('NearbyCategoryComponent', () => {
  let component: NearbyCategoryComponent;
  let fixture: ComponentFixture<NearbyCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearbyCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
