import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './service/auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map((authenticated: boolean) => {
        console.log('AuthGuard - isAuthenticated:', authenticated);
        // You can customize this logic based on your requirements
        return true;
      }),
      catchError((error) => {
        console.error('AuthGuard error:', error);
        return of(true); // Always allow navigation in case of an error
      })
    );
  }
}
