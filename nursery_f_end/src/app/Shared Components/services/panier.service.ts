import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private apiUrl = 'http://your-api-url/api/paniers';

  constructor(private http: HttpClient) {}

  createPanier(parentId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, {}, { params: { parentId: parentId.toString() } });
  }

  addCrecheToCart(panierId: number, creche: any): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${panierId}/creches`, creche);
  }

  removeCrecheFromCart(panierId: number, creche: any): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${panierId}/creches`, { body: creche });
  }

  getCrechesInPanier(panierId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${panierId}/creches`);
  }

  clearPanier(panierId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${panierId}`);
  }
}