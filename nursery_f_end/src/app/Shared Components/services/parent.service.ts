import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  private apiUrl = 'http://your-api-url/api/parents';

  constructor(private http: HttpClient) {}

  rechercherCreche(ville: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/creches`, { params: { ville } });
  }

  reserverPlace(parent: any, crecheId: number, dateDebut: Date, dateFin: Date): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reservations`, parent, { params: { crecheId, dateDebut: dateDebut.toISOString(), dateFin: dateFin.toISOString() } });
  }

  updateProfile(parentId: number, updatedParent: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${parentId}`, updatedParent);
  }

  addChild(parentId: number, child: any): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${parentId}/children`, child);
  }

  getChildren(parentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${parentId}/children`);
  }
}