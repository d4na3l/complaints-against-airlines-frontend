import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabladusuarioComponent } from './tabladusuario.component';

describe('TabladusuarioComponent', () => {
  let component: TabladusuarioComponent;
  let fixture: ComponentFixture<TabladusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabladusuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabladusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
