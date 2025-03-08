import { Component, OnInit } from '@angular/core';
import { ComplaintlistService } from '../../service/api/complaint/complaintlist.service';

@Component({
    selector: 'app-complaintable',
    imports: [],
    templateUrl: './complaintable.component.html',
    styleUrl: './complaintable.component.css',
})
export class ComplaintableComponent implements OnInit {
    public complaintData: any[] = []; // **[1] Propiedad para almacenar los datos en el componente**

    constructor(public complaintListService: ComplaintlistService) {}

    ngOnInit(): void {
        this.loadComplaints(); // **[2] Llama a la función de carga al inicializar**
    }

    loadComplaints() {
        // **[3] Renombrado a loadComplaints para mayor claridad**
        this.complaintListService.getListadoDenuncias().subscribe({
            // **[4] Usa el método getListadoDenuncias() del servicio**
            next: (data) => {
                this.complaintData = data; // **[5] Asigna la data a la propiedad DEL COMPONENTE: complaintData**
                console.log(
                    'Datos de denuncias recibidos:',
                    this.complaintData
                ); // Imprime los datos del componente
            },
            error: (error) => {
                console.error('Error al cargar denuncias:', error); // Imprime el error
            },
        });
    }
}
