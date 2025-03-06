import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApitestService {
    readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';

    data: any[];

    constructor(private http: HttpClient) {
        this.data = [];
    }

    getData() {
        return this.http.get<any[]>(this.apiUrl);
    }
}
