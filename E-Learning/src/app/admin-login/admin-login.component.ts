// admin-login.component.ts
import { Component } from '@angular/core';
import { AdminAuthService } from '../service/admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private adminAuthService: AdminAuthService, private router: Router) {}

  login(): void {
    this.adminAuthService.login(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/admin-dashboard']);
      },
      (error) => {
        console.error(error);
 
        if (error.status === 401 || error.status === 404) {
          // Unauthorized (username or password is incorrect) or Not Found (user not registered)
          this.errorMessage = 'Invalid username or password. Please enter valid details.';
        } else {
          // Other error
          this.errorMessage = 'An unexpected error occurred. Please try again later.'; 
  }
});
  }
  
}
