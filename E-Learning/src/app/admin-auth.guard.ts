// admin-auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AdminAuthService } from './service/admin-auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(private adminAuthService: AdminAuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.adminAuthService.isAuthenticated().pipe(
      map((isAdminAuthenticated: boolean) => {
        if (isAdminAuthenticated) {
          return true;
        } else {
          // Redirect to the admin login page if not authenticated
          this.router.navigate(['/admin-login']);
          return false;
        }
      }),
      catchError((error) => {
        console.error('AdminAuthGuard error:', error);
        return of(false); // Prevent navigation in case of an error
      })
    );
  }
}
