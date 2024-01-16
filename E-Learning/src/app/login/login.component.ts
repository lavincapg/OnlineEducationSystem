// login.component.ts

import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  errorMessage: string='';
  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    console.log('Login method is called.');
    this.userService.loginUser(this.userName, this.password).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/user-dashboard']);
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
