import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplaintlistService } from '../../../../service/api/complaint/complaintlist.service';

@Component({
    selector: 'app-employeecomplaint',
    imports: [],
    templateUrl: './employeecomplaint.component.html',
    styleUrl: './employeecomplaint.component.css',
})
export class EmployeecomplaintComponent {
    public complaintData: any;
    constructor(
        private route: ActivatedRoute,
        public complaintService: ComplaintlistService
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        this.getSingleComplain(id);
    }
    getSingleComplain(id: number) {
        this.complaintService.getUnicaDenuncia(id).subscribe({
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
