import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.interface';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post:Post;
  comments:Comment[];

  constructor(public postService : PostService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.params.id;
    this.post = this.postService.getPostById(postId);
    this.postService.getCommentsByPost(this.post.id).subscribe(data => this.comments = data);
  }

}
