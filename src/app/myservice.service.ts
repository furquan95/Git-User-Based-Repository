import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  public isLoading = new BehaviorSubject<boolean>(false); 
  URL:string= 'https://api.github.com/users/';
  userActive:string = 'furquan95';
  
  constructor(private http: HttpClient) {
    
    if(window.location.pathname.slice(6) !=''){
      this.userActive = window.location.pathname.slice(6);
    }
   }

  getRepos(page:any,url:string): Observable<any> {
    console.log(page);
    return this.http.get(this.URL+this.userActive+'/repos?per_page=10&page='+page).pipe(
        tap(data => {
          console.log('All: ' + JSON.stringify(data))
          this.isLoading.next(false)
      }),
        catchError(this.handleError)
    );
  }

  userGitDetails(){
    return this.http.get(this.URL+this.userActive).pipe(
      tap(data => {
        console.log('All: ' + JSON.stringify(data))
        this.isLoading.next(false)
    }),
      catchError(this.handleError)
    );
  }

  setLoaderStatus(status:boolean) {   
    this.isLoading.next(status); 
  }   

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

        errorMessage = `An error occurred: ${err.error.message}`;
    } else {

        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}



}
