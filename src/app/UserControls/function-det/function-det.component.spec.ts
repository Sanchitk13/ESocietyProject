import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionDetComponent } from './function-det.component';

describe('FunctionDetComponent', () => {
  let component: FunctionDetComponent;
  let fixture: ComponentFixture<FunctionDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
