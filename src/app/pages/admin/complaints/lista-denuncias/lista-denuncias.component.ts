import { Component } from '@angular/core';
import { ComplaintslistComponent } from '../../../../components/admin/complaintslist/complaintslist.component';
import { HeaderComponent } from '../../../../components/header/header.component';

@Component({
    selector: 'app-lista-denuncias',
    imports: [ComplaintslistComponent, HeaderComponent],
    templateUrl: './lista-denuncias.component.html',
    styleUrl: './lista-denuncias.component.css',
})
export class ListaDenunciasComponent {}
