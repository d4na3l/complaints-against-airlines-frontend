import { Component, OnInit } from '@angular/core';
import { UserslistService } from '../../../service/api/users/userslist.service';

@Component({
    selector: 'app-userlist',
    imports: [],
    templateUrl: './userlist.component.html',
    styleUrl: './userlist.component.css',
})
export class UserlistComponent implements OnInit {
    public userData: any[] = []; // **[1] Propiedad para almacenar los datos en el componente**

    constructor(public usersListService: UserslistService) {}

    ngOnInit(): void {
        this.loadComplaints(); // **[2] Llama a la función de carga al inicializar**
    }

    loadComplaints() {
        // **[3] Renombrado a loadComplaints para mayor claridad**
        this.usersListService.getListadoUsuarios().subscribe({
            // **[4] Usa el método getListadoDenuncias() del servicio**
            next: (data) => {
                this.userData = data; // **[5] Asigna la data a la propiedad DEL COMPONENTE: complaintData**
                console.log('Datos de usuario recibidos:', this.userData); // Imprime los datos del componente
            },
            error: (error) => {
                console.error('Error al cargar usuarios:', error); // Imprime el error
            },
        });
    }
}
