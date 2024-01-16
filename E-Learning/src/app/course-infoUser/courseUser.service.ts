import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CourseUser } from './courseUser';

@Injectable({
  providedIn: 'root'
})
export class CourseUserService {
  private baseUrl = 'http://localhost:8082/course'; // Adjust the base URL as needed
  errorHandler!: ((err: any, caught: Observable<Object>) => ObservableInput<any>);
  //errorHandler: (err: any, caught: Observable<Object>) => ObservableInput<any>;

  constructor(private http: HttpClient) {}

  viewAll(): Observable<Object>{
    return this.http.get(this.baseUrl+`/viewAll`)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  viewCourseByID(courseId:string){
    const url = `${this.baseUrl}/viewCourseByID/${courseId}`;
    
    return this.http.get(url)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  viewCourseByCategoryAndDuration( category: string,duration: number) {
    return this.http.get(this.baseUrl+`/viewCourseByCategoryAndDuration/${category}/${duration}`)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  viewScoreBySort(): Observable<Object> {
    return this.http.get(this.baseUrl+`/viewScoreBysort`)
      .pipe(
        catchError(this.errorHandler)
      );
   }
 
}