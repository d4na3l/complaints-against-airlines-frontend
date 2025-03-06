import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintformComponent } from './complaintform.component';

describe('ComplaintformComponent', () => {
  let component: ComplaintformComponent;
  let fixture: ComponentFixture<ComplaintformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
