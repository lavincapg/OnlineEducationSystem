import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8082'; // Replace with your backend API URL
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.getStoredAuthStatus());

  constructor(private http: HttpClient, private router: Router) {}

  // Observable to check if the user is authenticated
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  // Method to perform login
  login(username: string, password: string): Observable<any> {
    console.log('AuthService login method is called.'); // Log for debugging
    const body = { username, password };

    return this.http.post<any>(`${this.apiUrl}/login`, body).pipe(
      tap(
        (response) => {
          console.log('Login response:', response);
          this.handleAuthentication(response);
        },
        (error) => console.error('Login error:', error)
      ),
      catchError((error) => {
        console.error('Login error:', error);
        return throwError(error);
      })
    );
  }

  // Method to handle successful authentication
  private handleAuthentication(response: any): void {
    this.isAuthenticatedSubject.next(true);
    console.log('Authentication status:', this.isAuthenticatedSubject.value);

    // Store authentication status in localStorage
    localStorage.setItem('isAuthenticated', 'true');

    // Log user data
    console.log('User data:', response);
  }

  // Method to perform logout
  logout(): void {
    // Perform any cleanup or backend logout if needed
    // ...

    // Set authentication status to false when logout
    this.isAuthenticatedSubject.next(false);

    // Remove authentication status from localStorage
    localStorage.removeItem('isAuthenticated');

    // Redirect to the login page after logout
    this.router.navigate(['/login']);
  }

  // Method to retrieve stored authentication status
  private getStoredAuthStatus(): boolean {
    const storedStatus = localStorage.getItem('isAuthenticated');
    return storedStatus ? true : false;
  }
}
