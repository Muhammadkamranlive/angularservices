
import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/Services/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts :any=[]
  errorMessage:string | undefined=undefined;
  constructor(private serivce:PostServiceService)
  { 
   
  }
 
  createPost(input:HTMLInputElement){
    let post= {title:input.value}
    this.serivce.create(post).
     subscribe(response=>{
       console.log(response)
     },
     
     (err)=>{
      this.errorMessage=err;   
     })
  }
  ngOnInit(): void {
    this.serivce.getAll()
    .subscribe((response)=>{
      this.posts=response
    },
    
    (err)=>{
      this.errorMessage=err;   
     })
  }

}
