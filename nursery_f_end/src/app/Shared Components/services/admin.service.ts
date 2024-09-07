import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://your-api-url/api/admin';

  constructor(private http: HttpClient) {}

  registerAdministration(administration: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, administration);
  }

  gererCreches(nouvelleCreche: any): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/creche`, nouvelleCreche);
  }

  validerInscriptions(userId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/validate-user/${userId}`, {});
  }

  surveillerActivites(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }
}