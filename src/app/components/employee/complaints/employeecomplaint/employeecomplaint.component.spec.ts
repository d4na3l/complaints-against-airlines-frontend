import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecomplaintComponent } from './employeecomplaint.component';

describe('EmployeecomplaintComponent', () => {
  let component: EmployeecomplaintComponent;
  let fixture: ComponentFixture<EmployeecomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeecomplaintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeecomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
