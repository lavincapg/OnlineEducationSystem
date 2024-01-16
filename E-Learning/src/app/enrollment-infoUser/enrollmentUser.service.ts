import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentUserService {
  private baseUrl = 'http://localhost:8082/enrollment'; // Adjust the base URL as needed

  constructor(private http: HttpClient) {}


  viewAll(): Observable<Object> {
    return this.http.get(this.baseUrl+'/viewAll')
      .pipe(
        catchError(this.errorHandler)
      );
  }
  

  viewEnrollmentByID(enrollmentId: string): Observable<Object> {
    const url = `${this.baseUrl}/viewEnrollmentByID/${enrollmentId}`;
   
    return this.http.get(url)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  viewMaxScore(): Observable<Object> {
    return this.http.get(this.baseUrl+'/viewMax')
      .pipe(
        catchError(this.errorHandler)
      );
  }
  viewScoreBySort(): Observable<Object> {
    return this.http.get(this.baseUrl+'/viewScoreBysort')
      .pipe(
        catchError(this.errorHandler)
      );
  }
  viewMinScore(): Observable<Object> {
    return this.http.get(this.baseUrl+'/viewMin')
      .pipe(
        catchError(this.errorHandler)
      );
  }


  private errorHandler(error: HttpErrorResponse): Observable<any> {
    return throwError('An error occurred. Please try again later.');
  }
}
