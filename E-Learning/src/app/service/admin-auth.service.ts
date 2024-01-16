// admin-auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  private apiUrl = 'http://localhost:8082'; // Replace with your backend API URL
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.getStoredAuthStatus());

  constructor(private http: HttpClient, private router: Router) {}

  // Observable to check if the admin is authenticated
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  // Method to perform admin login
  login(username: string, password: string): Observable<any> {
    const body = { username, password };

    return this.http.post<any>(`${this.apiUrl}/admin/login`, body).pipe(
      tap(
        (response) => {
          this.handleAuthentication(response);
        },
        (error) => console.error('Admin login error:', error)
      ),
      catchError((error) => {
        console.error('Admin login error:', error);
        return throwError(error);
      })
    );
  }

  // Method to handle successful admin authentication
  private handleAuthentication(response: any): void {
    this.isAuthenticatedSubject.next(true);
    localStorage.setItem('isAdminAuthenticated', 'true');
    console.log('Admin data:', response);
  }

  // Method to perform admin logout
  logout(): void {
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('isAdminAuthenticated');
    this.router.navigate(['/admin-login']);
  }

  // Method to retrieve stored admin authentication status
  private getStoredAuthStatus(): boolean {
    const storedStatus = localStorage.getItem('isAdminAuthenticated');
    return storedStatus ? true : false;
  }
}
