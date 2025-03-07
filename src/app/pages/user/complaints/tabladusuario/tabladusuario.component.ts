import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { ComplaintableComponent } from '../../../../components/complaintable/complaintable.component';

@Component({
    selector: 'app-tabladusuario',
    imports: [HeaderComponent, ComplaintableComponent],
    templateUrl: './tabladusuario.component.html',
    styleUrl: './tabladusuario.component.css',
})
export class TabladusuarioComponent {}
