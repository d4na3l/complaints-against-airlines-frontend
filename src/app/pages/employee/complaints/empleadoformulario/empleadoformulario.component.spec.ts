import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoformularioComponent } from './empleadoformulario.component';

describe('EmpleadoformularioComponent', () => {
  let component: EmpleadoformularioComponent;
  let fixture: ComponentFixture<EmpleadoformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoformularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
