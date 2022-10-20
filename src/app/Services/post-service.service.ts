import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private url="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) {

  }
  getPost(){
   return this.http.get(this.url)
  }
  createPost(post:any){
   return this.http.post(this.url,JSON.stringify(post))
  }
}
