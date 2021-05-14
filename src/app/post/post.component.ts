import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../model/post.interface';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post:Post;

  @Input()
  fromWall:boolean

  @Output()
  postSelected = new EventEmitter<Post>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onPostSelected(){
    this.postSelected.emit(this.post);
  }
}
