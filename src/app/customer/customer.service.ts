import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './store/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private http = inject(HttpClient);
  private url = 'https://localhost:7032/api/customer';

  create(customer: Customer, token: string): Observable<any> {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`});
    let options = { headers: headers };
    let body = {firstName: customer.firstName, middleName: customer.middleName, lastName: customer.lastName, email: customer.email};
    return this.http.post(`${this.url}/create`, body, options);
  }

  get(token: string): Observable<any> {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`});
    let options = { headers: headers };
    return this.http.get(`${this.url}/get-all`, options);
  }
}