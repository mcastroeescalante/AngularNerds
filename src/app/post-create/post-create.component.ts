import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../model/post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  post:Post = {
    title:"",
    body:"",
    userId:1,
    id:0
  };


  constructor(public postService : PostService, public router : Router) { }

  ngOnInit(): void {
  }

  createPost(){
    this.postService.createPost(this.post).subscribe(data => {
      this.postService.addPost(data);
      this.router.navigate(['']);
    });
  }

}
