import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { EmployeelistComponent } from '../../../../components/employee/complaints/employeelist/employeelist.component';

@Component({
    selector: 'app-listafuncionario',
    imports: [HeaderComponent, EmployeelistComponent],
    templateUrl: './listafuncionario.component.html',
    styleUrl: './listafuncionario.component.css',
})
export class ListafuncionarioComponent {}
