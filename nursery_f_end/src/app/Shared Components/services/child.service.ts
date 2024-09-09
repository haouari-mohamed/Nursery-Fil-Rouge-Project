import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  private apiUrl = 'http://localhost:8888/api/children';

  constructor(private http: HttpClient) {}

  registerChild(child: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, child);
  }

  updateChild(childId: number, updatedChild: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${childId}`, updatedChild);
  }
}
