import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://your-api-url/api/reservations';

  constructor(private http: HttpClient) {}

  createReservation(parentId: number, crecheId: number, dateDebut: Date, dateFin: Date): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, { parentId, crecheId, dateDebut, dateFin });
  }

  confirmReservation(reservationId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${reservationId}/confirm`, {});
  }

  cancelReservation(reservationId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${reservationId}/cancel`, {});
  }

  getParentReservations(parentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/parent/${parentId}`);
  }

  getCrecheReservations(crecheId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/creche/${crecheId}`);
  }
}