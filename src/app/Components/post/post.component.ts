
import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/Services/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts :any=[]
  constructor(private serivce:PostServiceService)
  { 
   
  }
  createPost(input:HTMLInputElement){
    let post= {title:input.value}
    this.serivce.createPost(post).
     subscribe(response=>{
       console.log(response)
     })
  }
  ngOnInit(): void {
    this.serivce.getPost()
    .subscribe((response)=>{
      this.posts=response
    })
  }

}
