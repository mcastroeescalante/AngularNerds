import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../model/post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  posts:Post[] = [];

  constructor(public postService : PostService, public router : Router) { }

  ngOnInit(): void {
    this.postService.getPosts().then(posts => this.posts = posts);
  }

  onPostSelected(post:Post){
    this.router.navigate(['detail', { id: post.id}]);
  }

}
