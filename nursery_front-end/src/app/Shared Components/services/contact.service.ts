import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMessage } from '../models/global.model';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8888/api/contact';

  constructor(private http: HttpClient) { }


  sendMessage(contactMessage: ContactMessage): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/send`, contactMessage, { responseType: 'text' as 'json' });
  }

 
  getAllMessages(): Observable<ContactMessage[]> {
    return this.http.get<ContactMessage[]>(`${this.apiUrl}/all`);
  }
}
