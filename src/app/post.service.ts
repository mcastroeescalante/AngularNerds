import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from './model/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Post[];

  constructor(private http: HttpClient) { }

  async getPosts():Promise<Post[]>{
    await this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts").subscribe(data => this.posts = data);
    return this.posts;
  }

  createPost(post :Post){
    return this.http.post<Post>("https://jsonplaceholder.typicode.com/posts",post);
  }

  addPost(post:Post){
    this.posts.push(post);
  }

  getPostById(id:number):Post{
    return this.posts.find(post => post.id = id);
  }

  
  getCommentsByPost(postId:number):Observable<Comment[]>{
    return this.http.get<Comment[]>("https://jsonplaceholder.typicode.com/posts/"+postId+"/comments");
  }
}
