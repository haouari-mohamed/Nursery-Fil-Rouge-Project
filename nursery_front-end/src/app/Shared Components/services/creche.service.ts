import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Creche } from '../models/global.model';  

@Injectable({
  providedIn: 'root'
})
export class CrecheService {
  private apiUrl = 'http://localhost:8888/api/creches'

  constructor(private http: HttpClient) {}

  addCreche(creche: Creche): Observable<Creche> {
    return this.http.post<Creche>(`${this.apiUrl}/add`, creche);
  }

  // Search for crèches by city (ville)
  searchCreches(ville: string): Observable<Creche[]> {
    const url = `${this.apiUrl}/search?ville=${ville}`;
    return this.http.get<Creche[]>(url);
  }

  // Get crèche details by ID
  getCreche(crecheId: number): Observable<Creche> {
    const url = `${this.apiUrl}/${crecheId}`;
    return this.http.get<Creche>(url);
  }

  // Update crèche detai
  updateCreche(crecheId: number, updatedCreche: Creche): Observable<void> {
    const url = `${this.apiUrl}/${crecheId}`;
    return this.http.put<void>(url, updatedCreche, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  
  getAllCreches(): Observable<Creche[]> {
    return this.http.get<Creche[]>(this.apiUrl);
  }
  //delete 

  deleteCreche(crecheId: number): Observable<void> {
    const url = `${this.apiUrl}/${crecheId}`;
    return this.http.delete<void>(url);
  }
  
}
