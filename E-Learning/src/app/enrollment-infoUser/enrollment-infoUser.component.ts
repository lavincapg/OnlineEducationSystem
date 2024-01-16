
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EnrollmentUserService } from './enrollmentUser.service';

import { EnrollmentUser } from './enrollmentUser';

@Component({
  selector: 'app-enrollment-infoUser',
  templateUrl: './enrollment-infoUser.component.html',
  styleUrls: ['./enrollment-infoUser.component.css']
})
export class EnrollmentInfoUserComponent implements OnInit {

  enroll: EnrollmentUser = new EnrollmentUser();
  myparam: number = 0;
  enrollments: any;
  responseMessage: string = '';
  updateScoreForm: any;
  enrollmentByIDForm: any;
  scoreCourseForm: any;
  courseForm: any;
  enroll1: EnrollmentUser | undefined;
  studentId!: string;
  trainerId!: string;
  courseId!: string;

  // Form models for different operations
  enrolls!: EnrollmentUser[];
  enrollsSorted!: EnrollmentUser[];
  enrollMin!: EnrollmentUser[];
  enrollMax!: EnrollmentUser[];
  enrollmentId!: any;
  enrollUpdated: EnrollmentUser | undefined;



  constructor(private enrollmentUserService: EnrollmentUserService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.myparam = queryParams['paramFlag'] || 1; 
    });

  }
  
  viewAll() {
    this.responseMessage = "";
    this.enrollmentUserService.viewAll().subscribe(
      data => {
        this.enrolls = data as EnrollmentUser[],

        console.log(this.enrolls[0].studentObj)
      },
      (error: any) => {
        // Data validation failed
        this.responseMessage = "Could not fetch all data"
        alert(this.responseMessage)
      });

  }
  viewEnrollmentByID() {
    this.responseMessage = "";
    this.enrollmentUserService.viewEnrollmentByID(this.enrollmentId)
      .subscribe(
        data => {
          this.enroll1 = data as EnrollmentUser;
        },
        (error: any) => {
          // Data validation failed
          this.responseMessage = "Could not find the data"
          alert(this.responseMessage)
        }
      );
  }
  viewMaxScore() {
    this.responseMessage = "";
    this.enrollmentUserService.viewMaxScore().subscribe(
      data => { this.enrollMax = data as EnrollmentUser[] },
      (error: any) => {
        // Data validation failed
        this.responseMessage = "Could not find the data"
        alert(this.responseMessage)
      });

  }
  viewScoreBySort() {
    this.responseMessage = "";
    this.enrollmentUserService.viewScoreBySort().subscribe(
      data => { this.enrollsSorted = data as EnrollmentUser[] },
      (error: any) => {
        // Data validation failed
        this.responseMessage = "Could not find the data"
        alert(this.responseMessage)
      });

  }
  viewMinScore() {
    this.responseMessage = "";
    this.enrollmentUserService.viewMinScore().subscribe(
      data => { this.enrollMin = data as EnrollmentUser[] },
      (error: any) => {
        // Data validation failed
        this.responseMessage = "Could not find the data"
        alert(this.responseMessage)
      });

  }
    
}
