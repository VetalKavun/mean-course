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
  public posts: Post[] = [];
  private postSub: Subscription;

  constructor(public postService: PostService){

  }
  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }
  ngOnInit(): void {
    this.postService.getPosts();
    this.postSub = this.postService.getPostsUpdateListener().subscribe((postsArr: Post[]) => {
      this.posts = postsArr;
    });
    console.log('in the ngOnInit method');
  }


}
