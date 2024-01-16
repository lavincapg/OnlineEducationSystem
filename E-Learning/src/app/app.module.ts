import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollmentInfoComponent } from './enrollment-info/enrollment-info.component';
import { TrainerInfoComponent } from './trainer-info/trainer-info.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { FeedbackInfoComponent } from './feedback-info/feedback-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseInfoComponent } from './course-info/course-info.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuard } from './auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component'; // Import AuthGuard
import { EnrollmentInfoUserComponent } from './enrollment-infoUser/enrollment-infoUser.component';
import { CourseInfoUserComponent } from './course-infoUser/course-infoUser.component';
import { FeedbackInfoUserComponent } from './feedback-infoUser/feedback-infoUser.component';
import { StudentInfoUserComponent } from './student-infoUser/student-infoUser.component';
import { TrainerInfoUserComponent } from './trainer-infoUser/trainer-infoUser.component';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    EnrollmentInfoComponent,
    TrainerInfoComponent,
    CourseInfoComponent,
    StudentInfoComponent,
    FeedbackInfoComponent,
    EnrollmentInfoUserComponent,
    TrainerInfoUserComponent,
    CourseInfoUserComponent,
    StudentInfoUserComponent,
    FeedbackInfoUserComponent,
    RegisterComponent,
    LoginComponent,
    UserDashboardComponent,
    
    AdminDashboardComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
