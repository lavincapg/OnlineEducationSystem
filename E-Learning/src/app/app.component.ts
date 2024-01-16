import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from './service/admin-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'E-Learning';
  isAdminLoggedIn: boolean = false;

  constructor(private adminAuthService: AdminAuthService) {}

  ngOnInit(): void {
    this.adminAuthService.isAuthenticated().subscribe((loggedIn) => {
      this.isAdminLoggedIn = loggedIn;
    });
  }

  adminLogin(credentials: { username: string; password: string }): void {
    this.adminAuthService.login(credentials.username, credentials.password).subscribe(
      () => {
        // Optionally perform additional actions upon successful admin login
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
