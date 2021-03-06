import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostService } from "../post.service";


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{

  enteredTitle = "";
  enteredValue = "";

  constructor(public postService: PostService){}

  onAddPost(postForm: NgForm){
    if(postForm.invalid){
      return;
    }
    this.postService.setPosts(postForm.value.title, postForm.value.content);
    postForm.resetForm();
  }
}
