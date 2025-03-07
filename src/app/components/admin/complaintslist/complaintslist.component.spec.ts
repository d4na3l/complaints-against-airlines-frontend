import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintslistComponent } from './complaintslist.component';

describe('ComplaintslistComponent', () => {
  let component: ComplaintslistComponent;
  let fixture: ComponentFixture<ComplaintslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
