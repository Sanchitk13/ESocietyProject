import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionCatComponent } from './function-cat.component';

describe('FunctionCatComponent', () => {
  let component: FunctionCatComponent;
  let fixture: ComponentFixture<FunctionCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
