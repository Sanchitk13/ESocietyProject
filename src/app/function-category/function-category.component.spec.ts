import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionCategoryComponent } from './function-category.component';

describe('FunctionCategoryComponent', () => {
  let component: FunctionCategoryComponent;
  let fixture: ComponentFixture<FunctionCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
