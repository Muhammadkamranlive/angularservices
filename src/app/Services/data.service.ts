import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";
import { Inject } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(this.url).pipe(catchError(this.handleError));
  }
  create(resource: any) {
    return this.http.post(this.url, resource);
  }
  delete(id:number){
    return this.http.delete(this.url+"/"+id);
  }
  update(data:any,id:number){
    return this.http.put(this.url+"/"+id,data);
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.status === 400) {
      errorMessage = `An error occurred:${error.error}`;
    } else {
      console.log(error);
      errorMessage += `Backend returned code ${error.status}, body was: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
