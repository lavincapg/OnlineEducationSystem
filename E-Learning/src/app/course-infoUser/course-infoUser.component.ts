import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { CourseService } from './course.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Enrollment } from '../enrollment-info/enrollment';
//


import { EnrollmentUserService } from '../enrollment-infoUser/enrollmentUser.service';
import { CourseUser } from './courseUser';
import { CourseUserService } from './courseUser.service';
//import { Course1 } from './course';


@Component({
  selector: 'app-course-infoUser',
  templateUrl: './course-infoUser.component.html',
  styleUrls: ['./course-infoUser.component.css']
})
export class CourseInfoUserComponent implements OnInit {
  course: CourseUser = new CourseUser();
  courseId: string = '';
  courseName: string = '';
  duration: number = 0;
  category: string = '';
  errorMessage: string='';
  successMessage : string = '';
  message: string='';
  allCourses: any;
  paramFlag : number = 0;
  courses : CourseUser[] | undefined;
  selectedCategory: string = '';
  selectedDuration: number = 0;
  courseUpdated!: CourseUser ;
  courseByCD!: CourseUser[] ;
 // courseService: any;
  constructor(private courseUserService: CourseUserService,private route: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(
      param =>{
        this.paramFlag = param['paramFlag']
      }
    );
  }

  addedCourse:CourseUser=new CourseUser();
  
  viewAll(){
    this.successMessage="";
    this.courseUserService.viewAll().subscribe(
      data=>{this.courses=data as CourseUser[]},
      (error: any) => {
        // Data validation failed
        this.successMessage="Data is not fetched:"
      });
    
  }
viewCourseByID(){
  
  this.courseUserService.viewCourseByID(this.courseId).subscribe(
    (data: CourseUser) => {
      console.log(`Course ID ${this.courseId} details retrieved successfully.`);
      // Handle the retrieved course data as needed
      this.courseUpdated=data as CourseUser;

    },
    (error: any) => {
      console.error(error); // Display the error message from the HTTP response
    }
  );
}
viewCourseByCategoryAndDuration() {
  // Call the viewCourseByCategoryAndDuration method from the CourseService
  
  this.courseUserService
    .viewCourseByCategoryAndDuration(this.selectedCategory, this.selectedDuration)
    .subscribe(
      (data) => {
        console.log('View Course By Category And Duration done successfully.');
        // Handle the retrieved course data as needed
        this.courseByCD=data as CourseUser[];

      },
      (error: any) => {
        console.error(error); // Display the error message from the HTTP response
      }
    );
}
searchCourses() {
  // Ensure category and duration have valid values
  if (!this.category || !this.duration) {
    console.error('Please provide both category and duration.');
    return;
  }

  // Call the viewCourseByCategoryAndDuration method from the CourseService
  this.courseUserService
    .viewCourseByCategoryAndDuration(this.category, this.duration)
    .subscribe(
      (data: CourseUser) => {
        // Handle the retrieved course data as needed
        console.log('View Course By Category And Duration done successfully.');
        this.course = data; // Update the courses array with the search results
      },
      (error: any) => {
        console.error(error); // Display the error message from the HTTP response
        this.courses = []; // Clear the courses array on error
      }
    );
}
}