import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { ComplaintslistComponent } from '../../../../components/admin/complaintslist/complaintslist.component';

@Component({
    selector: 'app-lista-denuncias',
    imports: [HeaderComponent, ComplaintslistComponent],
    templateUrl: './lista-denuncias.component.html',
    styleUrl: './lista-denuncias.component.css',
})
export class ListaDenunciasComponent {}
