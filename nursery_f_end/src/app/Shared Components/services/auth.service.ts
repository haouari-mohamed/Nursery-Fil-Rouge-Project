import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8888/auth';  
  private tokenKey = 'authToken';
  private rolesKey = 'roles';  

  private rolesSubject = new BehaviorSubject<string[]>(this.getStoredRoles());
  public roles$ = this.rolesSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        console.log('Login response:', response);
        localStorage.setItem(this.tokenKey, response.token);
        localStorage.setItem(this.rolesKey, JSON.stringify(response.roles)); 
        this.rolesSubject.next(response.roles);
        console.log('Roles:', response.roles); 
      }),
      catchError(error => {
        console.error('Login failed', error);
        throw error;
      })
    );
  }
  
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.rolesKey);  
    this.rolesSubject.next([]);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getRoles(): string[] {
    const roles = this.rolesSubject.value;
    console.log('Current roles:', roles); 
    return roles;
  }

  private getStoredRoles(): string[] {
    const roles = localStorage.getItem(this.rolesKey);
    return roles ? JSON.parse(roles) : [];
  }
}
