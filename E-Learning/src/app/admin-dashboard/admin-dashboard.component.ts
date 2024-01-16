// admin-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../service/admin-auth.service';
import { Admin } from '../interface/admin.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private adminAuthService: AdminAuthService) {}

  ngOnInit(): void {
    // Subscribe to the isAuthenticated observable to get updates
    this.adminAuthService.isAuthenticated().subscribe((authStatus) => {
      this.isAuthenticated = authStatus;
    });
  }

  // Method to handle admin logout
  logout(): void {
    this.adminAuthService.logout();
    // You can perform additional actions after the logout if needed
  }
}
