import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // <-- Ensure this is set
})
export class AuthService {
  private http = inject(HttpClient);
  private loginUrl = 'https://localhost:7032/api/auth';

  login(username: string, password: string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'}
    );
    let options = { headers: headers };
    return this.http.post(`${this.loginUrl}/login`, { username, password }, options);
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.loginUrl}/register`, { username, password }, {responseType: 'text'});
  }
}