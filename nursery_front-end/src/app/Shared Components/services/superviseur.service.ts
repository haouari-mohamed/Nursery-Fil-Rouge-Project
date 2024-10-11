import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperviseurService {
  private apiUrl = 'http://localhost:8888/api/superviseurs';

  constructor(private http: HttpClient) {}

  registerSuperviseur(superviseur: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, superviseur);
  }
/* 
  getSuperviseurs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  } */

  gererInformations(crecheId: number, updatedCreche: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/creches/${crecheId}`, updatedCreche);
  }
}
