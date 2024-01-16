// user-log-controller.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserLogControllerService {
  private apiUrl = 'http://localhost:8082/user';

  constructor(private http: HttpClient) {}

  registerCustomer(userName: string, password: string): Observable<string> {
    const body = new HttpParams()
      .set('userName', userName)
      .set('password', password);

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    };

    return this.http.post<string>(`${this.apiUrl}/customer`, body.toString(), options);
  }

  handleLogout(logoutMsg: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/customer/logout/${logoutMsg}`);
  }
}
