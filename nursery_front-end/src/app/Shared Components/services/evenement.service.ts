import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  private apiUrl = 'http://localhost:8888/api/evenements';

  constructor(private http: HttpClient) {}

  getAllEvenements(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEvenementById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createEvenement(evenement: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, evenement);
  }

  updateEvenement(id: number, evenement: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, evenement);
  }

  deleteEvenement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getEvenementsByDate(date: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/date/${date}`);
  }

  getEvenementsByCreche(crecheId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/creche/${crecheId}`);
  }
}