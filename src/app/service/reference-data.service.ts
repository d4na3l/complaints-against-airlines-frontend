import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DocumentType {
  document_type_id: number;
  document_type_name: string;
  keyword: string; 
 
}

@Injectable({
    providedIn: 'root'
})
export class ReferenceDataService {

    private baseUrl = 'http://localhost:8000/api/v1/reference-data'; 
    constructor(private http: HttpClient) { }

    getDocumentTypes(): Observable<DocumentType[]> {
        return this.http.get<DocumentType[]>(`${this.baseUrl}/document-types`);
    }
}