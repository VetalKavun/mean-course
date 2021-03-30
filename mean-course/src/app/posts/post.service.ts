import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService{

  private posts: Post [] = [];
  private postUpdated = new Subject<Post[]>();

  getPosts(){
    return this.posts;
  }

  getPostsUpdateListener(){
    return this.postUpdated.asObservable();
  }

  setPosts(title: string, content: string){
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
}
