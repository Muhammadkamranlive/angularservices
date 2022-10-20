import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Inject } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(@Inject(String) private url: string,  private http:HttpClient) {
     
  }
 
  
  getAll(){
   return this.http.get(this.url)
   .pipe(
    retry(3),
    catchError(this.handleError)
   )
  }
  create(resource:any){
   return this.http.post(this.url,JSON.stringify(resource))
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage=''
    if (error.status === 400) {
      errorMessage=`An error occurred:${error.error}`
      
    } else {
      console.log(error)
      errorMessage=`Backend returned code ${error.status}, body was: ${error.error}`  
    }
    return throwError(() => new Error(errorMessage));
  }
}
