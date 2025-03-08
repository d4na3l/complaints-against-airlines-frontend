import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { EmployeecomplaintComponent } from '../../../../components/employee/complaints/employeecomplaint/employeecomplaint.component';

@Component({
    selector: 'app-empleadoformulario',
    imports: [HeaderComponent, EmployeecomplaintComponent],
    templateUrl: './empleadoformulario.component.html',
    styleUrl: './empleadoformulario.component.css',
})
export class EmpleadoformularioComponent {}
