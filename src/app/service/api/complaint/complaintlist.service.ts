import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ComplaintlistService {
    readonly apiUrl = 'http://localhost:8000/api/v1'; // **[1] Ajusta la URL base de tu API Laravel**
    readonly denunciasEndpoint = '/denuncias'; // **[2] Define el endpoint específico al que quieres acceder (ej: /denuncias)**

    data: any[];

    constructor(private http: HttpClient) {
        this.data = [];
    }

    getListadoDenuncias(): Observable<any[]> {
        // **[3] Cambia el nombre de la función a algo más descriptivo**
        const token = '14|eSIV8grGXA7zsYjmiljjkBfNAGPm15fODjLTII6W379e6fc9'; // **[4] ¡PEGA AQUÍ TU TOKEN DE PRUEBA!**

        const headers = new HttpHeaders({
            // **[5] Crea un objeto HttpHeaders**
            Authorization: `Bearer ${token}`, // **[6] Añade la cabecera Authorization con el token**
            Accept: 'application/json', // **[7] (Opcional) Indica que esperas JSON**
        });

        return this.http.get<any[]>(`${this.apiUrl}${this.denunciasEndpoint}`, {
            headers: headers,
        }); // **[8] Usa la URL base, el endpoint y las cabeceras**
    }

    getUnicaDenuncia(id: number): Observable<any[]> {
        // **[3] Cambia el nombre de la función a algo más descriptivo**
        const token = '14|eSIV8grGXA7zsYjmiljjkBfNAGPm15fODjLTII6W379e6fc9'; // **[4] ¡PEGA AQUÍ TU TOKEN DE PRUEBA!**

        const headers = new HttpHeaders({
            // **[5] Crea un objeto HttpHeaders**
            Authorization: `Bearer ${token}`, // **[6] Añade la cabecera Authorization con el token**
            Accept: 'application/json', // **[7] (Opcional) Indica que esperas JSON**
        });

        return this.http.get<any[]>(
            `${this.apiUrl}${this.denunciasEndpoint}/${id}`,
            {
                headers: headers,
            }
        ); // **[8] Usa la URL base, el endpoint y las cabeceras**
    }
}
