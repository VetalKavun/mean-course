import { Component, OnDestroy, OnInit } from "@angular/core";
import { Post } from "../post.model";
import { PostService } from "../post.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
  posts: Post[] = [];
  private postSub: Subscription;

  constructor(public postService: PostService){

  }
  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }
  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.postSub = this.postService.getPostsUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    })
  }


}
