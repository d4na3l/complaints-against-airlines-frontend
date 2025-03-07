import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { UserlistComponent } from '../../../../components/admin/userlist/userlist.component';

@Component({
    selector: 'app-lista',
    imports: [HeaderComponent, UserlistComponent],
    templateUrl: './lista.component.html',
    styleUrl: './lista.component.css',
})
export class ListaComponent {}
