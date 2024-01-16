import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../interface/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  newUser: User = {
    name: '',
    mobileNumber: '',
    userPassword: '',
    address: '',
    userName: '',
    emailId: '',
    logoutMsg: 'yes',
    id: 0
  };
  errorMessage: string = '';

  constructor(private router: Router, private userService: UserService) {}

  register(): void {
    this.userService.addUser(this.newUser).subscribe(
      (response) => {
        // Registration successful, you may want to handle this
        console.log('Registration successful:', response);

        // Optionally, navigate to the login page or home page after successful registration
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Registration failed:', error);

        // Check the error response from the server and display an appropriate error message
        if (error.status === 409) {
          // Conflict - User with the same username already exists
          this.errorMessage = 'Username already exists. Please choose a different username.';
        } else {
          // Other server-side error
          this.errorMessage = 'An unexpected error occurred. Please try again later.';
        }
      }
    );
  }
}
