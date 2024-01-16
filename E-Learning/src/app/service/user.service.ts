import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../interface/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8082/api/users';

  // Create a BehaviorSubject to store the logged-in user
  private loggedInUserSubject = new BehaviorSubject<User>({} as User);
  loggedInUser = this.loggedInUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  loginUser(username: string, password: string): Observable<User> {
    console.log('Attempting to login:', username);

    return this.http.post<User>(`${this.apiUrl}/authenticate`, { username, password }).pipe(
      tap((user) => {
        console.log('Login successful:', user);
        // Set the logged-in user in the service or use BehaviorSubject to notify other components
        this.loggedInUserSubject.next(user);
      }),
      catchError((error) => {
        console.error('Login error:', error);
        throw error;
      })
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/viewAllUsers`);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/viewUserById/${userId}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/add`, user);
  }

  updateUser(userId: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/update/${userId}`, user);
  }

  deleteUser(username: string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/deleteUserByUsername/${username}`);
  }
}
