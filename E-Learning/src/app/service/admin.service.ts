import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../interface/admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:8082/admin'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  registerAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.apiUrl}/register`, admin);
  }

  login(username: string, password: string): Observable<Admin> {
    return this.http.post<Admin>(`${this.apiUrl}/login`, { username, password });
  }

  forgotPassword(username: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/forgot-password`, { username });
  }

  editProfile(adminId: number, admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${this.apiUrl}/edit-profile/${adminId}`, admin);
  }

  // Add other methods as needed for CRUD operations on admin entities
}
