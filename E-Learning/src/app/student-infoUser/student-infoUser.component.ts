import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentUser } from './studentUser';
import { StudentUserService } from './studentUser.service';

@Component({
  selector: 'app-studentUser-info',
  templateUrl: './student-infoUser.component.html',
  styleUrls: ['./student-infoUser.component.css']
})
export class StudentInfoUserComponent implements OnInit {
 stud:StudentUser = new StudentUser();
 myparam :number=0;
 responseMessage: string = '';
 stud1: StudentUser | undefined;
 studentForm:any;

  
 students!:StudentUser[];
 studUpdate:StudentUser | undefined;
  
  
  constructor(private studentUserService: StudentUserService,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: { [x: string]: number; }) => {
      this.myparam = queryParams['paramFlag'] || 1; // Default to 1 if 'paramFlag' is not provided in the query parameters.
    });
    
    this.viewAll();
  }
  
  viewAll(){
    this.responseMessage="";
    this.studentUserService.viewAll().subscribe(
      data=>{this.students=data as StudentUser[],
        console.log(data)},
        (error: any) => {
          // Data validation failed
          this.responseMessage="Data is not fetched:"
        }
      );
    
  }
  viewStudentByID() {
    this.responseMessage="";
    this.studentUserService.viewStudentByID(this.stud.studentId)
      .subscribe(
       
        data => {
          
          this.stud1=data as StudentUser;

        },
        (error: any) => {
          // Data validation failed
          this.responseMessage="Data is not fetched:"
        }
        
      );
  }
 
}