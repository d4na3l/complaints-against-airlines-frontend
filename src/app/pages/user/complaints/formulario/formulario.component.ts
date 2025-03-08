import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { ComplaintformComponent } from '../../../../components/complaintform/complaintform.component';

@Component({
    selector: 'app-formulario',
    imports: [HeaderComponent, ComplaintformComponent],
    templateUrl: './formulario.component.html',
    styleUrl: './formulario.component.css',
})
export class FormularioComponent {}
