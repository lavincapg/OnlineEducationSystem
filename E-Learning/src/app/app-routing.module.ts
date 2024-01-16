import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseInfoComponent } from './course-info/course-info.component';
import { EnrollmentInfoComponent } from './enrollment-info/enrollment-info.component';
import { FeedbackInfoComponent } from './feedback-info/feedback-info.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { TrainerInfoComponent } from './trainer-info/trainer-info.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component'; // Import your customer dashboard component
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminAuthGuard } from './admin-auth.guard';
import { AuthGuard } from './auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CourseInfoUserComponent } from './course-infoUser/course-infoUser.component';
import { EnrollmentInfoUserComponent } from './enrollment-infoUser/enrollment-infoUser.component';
import { FeedbackInfoUserComponent } from './feedback-infoUser/feedback-infoUser.component';
import { StudentInfoUserComponent } from './student-infoUser/student-infoUser.component';
import { TrainerInfoUserComponent } from './trainer-infoUser/trainer-infoUser.component';

const routes: Routes = [
 { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'trainerInfo', component: TrainerInfoComponent },
  { path: 'courseInfo', component: CourseInfoComponent },
  { path: 'studentInfo', component: StudentInfoComponent },
  { path: 'enrollmentInfo', component: EnrollmentInfoComponent },
  { path: 'feedbackInfo', component: FeedbackInfoComponent },
  { path: 'trainerInfoUser', component: TrainerInfoUserComponent },
  { path: 'courseInfoUser', component: CourseInfoUserComponent },
  { path: 'studentInfoUser', component: StudentInfoUserComponent },
  { path: 'enrollmentInfoUser', component: EnrollmentInfoUserComponent },
  { path: 'feedbackInfoUser', component: FeedbackInfoUserComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AdminAuthGuard] },
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
