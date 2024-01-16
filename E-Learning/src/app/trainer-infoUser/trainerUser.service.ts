import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TrainerUser } from './trainerUser';

@Injectable({
  providedIn: 'root'
})
export class TrainerUserService {
  private baseUrl = 'http://localhost:8082/trainer'; // Adjust the base URL as needed

  constructor(private http: HttpClient) {}


  viewAll(): Observable<TrainerUser[]> {
    
    console.log("in service")
    return this.http.get<TrainerUser[]>(this.baseUrl+'/viewAll')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  viewTrainerByID(trainerId: string): Observable<Object> {
    const url = `${this.baseUrl}/viewTrainerByID/${trainerId}`;
    console.log("This service is called");
    return this.http.get(url)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  
  private errorHandler(error: HttpErrorResponse): Observable<any> {
    return throwError('An error occurred. Please try again later.');
  }
}
