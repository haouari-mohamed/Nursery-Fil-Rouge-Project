import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8888/auth';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/register`, user);
  }

  generateToken(authRequest: any): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/generateToken`, authRequest);
  }

  hello(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/hello`);
  }
}