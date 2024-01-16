import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { User } from '../interface/user.model';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  loggedInUser: User = {} as User;

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    // Subscribe to the loggedInUser observable to get updates
    this.userService.loggedInUser.subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  // Method to handle user logout
  logout(): void {
    this.authService.logout();
    // You can perform additional actions after the logout if needed
  }
  
}
