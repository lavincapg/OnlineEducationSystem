import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackUser } from './feedbackUser';
import { FeedbackUserService } from './feedbackUser.service';

@Component({
  selector: 'app-feedbackUser-info',
  templateUrl: './feedback-infoUser.component.html',
  styleUrls: ['./feedback-infoUser.component.css']
})
export class FeedbackInfoUserComponent implements OnInit{
  feed: FeedbackUser = new FeedbackUser();
  myparam: number = 0;
  feedbacks: any;
  responseMessage: string = '';
  updateFeedbackForm: any;
  enrollmentByIDForm: any;
  scoreCourseForm: any;
  courseForm: any;
  enroll1:FeedbackUser | undefined;
  // Form models for different operations
  feeds!: FeedbackUser[];
  feedbackId!:any;
  feedUpdated:FeedbackUser|undefined;
  FeedbackService: any;
 
  
  
  constructor(private feedbackUserService: FeedbackUserService,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: { [x: string]: number; }) => {
      this.myparam = queryParams['paramFlag'] || 1; // Default to 1 if 'paramFlag' is not provided in the query parameters.
    });
    this.viewAll();
    

  }
  addFeedback() {
    this.responseMessage="";
    console.log("in ts")
    this.feedbackUserService.addFeedback(this.feed, this.feed.enrollmentId)
      .subscribe(
        (response: any) => {
          this.responseMessage = `Feedback with ID ${response.feedbackId} added successfully`;
        },
        (error: any) => {
          this.responseMessage = 'An error occurred while adding the feedback.';
        }
      );
  }
  updateFeedback() {
    this.responseMessage="";
    this.feedbackUserService.updateFeedback(this.feed.enrollmentId, this.feed.rating)
      .subscribe(
       
        data => {
          // Data validation successful
          this.responseMessage="Data successfully updated:",
          this.feedUpdated = data as FeedbackUser;
        },
        (error: any) => {
          // Data validation failed
          this.responseMessage="Data is not updated:"
        }
      );
        

  }
  viewAll(){
    this.responseMessage="";
    
    this.feedbackUserService.viewAll().subscribe(
      
      data=>{this.feeds=data as FeedbackUser[]
      },
      (error: any) => {
        this.responseMessage = 'An error occurred while fetching the data';
      }
      );
    
  }

  deleteFeedbackById() {
    this.responseMessage = "";
    this.feedbackUserService.deleteFeedback(this.feed.feedbackId)
      .subscribe(
        () => {
          this.responseMessage = `Feedback with ID ${this.feed.feedbackId} deleted successfully`;
        },
        () => {
          this.responseMessage = 'An error occurred while deleting the feedback.';
        }
      );
  }

}
 