import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApitestService {
    readonly apiUrl = 'https://rickandmortyapi.com/api/character';

    // data: any[];

    constructor(private http: HttpClient) {}

    getData() {
        return this.http.get<any[]>(this.apiUrl);
    }
}
