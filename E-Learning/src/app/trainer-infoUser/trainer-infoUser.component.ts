
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainerUser } from './trainerUser';
import { TrainerUserService } from './trainerUser.service';

@Component({
  selector: 'app-trainer-infoUser',
  templateUrl: './trainer-infoUser.component.html',
  styleUrls: ['./trainer-infoUser.component.css']
})
export class TrainerInfoUserComponent implements OnInit {
  
  trainer:TrainerUser=new TrainerUser();
  myparam: number = 0;

  responseMessage: string = '';
  
  train1:TrainerUser | undefined;
  // Form models for different operations
  trainers: TrainerUser[]=[];
  courseId!: string;
  trainerUpdated:TrainerUser | undefined;
 
 
  
  
  constructor(private trainerUserService: TrainerUserService,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: { [x: string]: number; }) => {
      this.myparam = queryParams['paramFlag'] || 1; // Default to 1 if 'paramFlag' is not provided in the query parameters.
    });
   this.viewAll();

  }


  
  viewAll(){
    this.responseMessage="";
    this.trainerUserService.viewAll().subscribe(
      data=>{this.trainers=data 
      console.log(this.trainers[0].courseObj)},
      (error: any) => {
        // Data validation failed
        this.responseMessage = "Could not fetch all data"
      });
    
  }
  
  viewTrainerByID1() {
    //this.responseMessage="";
    this.trainerUserService.viewTrainerByID(this.trainer.trainerId)
      .subscribe(
        
        data => {
          
          this.train1=data as TrainerUser;

        },
        (error: any) => {
          // Data validation failed
          this.responseMessage="Data is not found:"
        }
        
        
      );
  }
}