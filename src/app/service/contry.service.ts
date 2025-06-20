import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'http://localhost:8000/api/v1/reference-data/countries';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getCountryByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/name/${name}`);
  }

  getCountryByCode(code: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/alpha/${code}`);
  }
}
