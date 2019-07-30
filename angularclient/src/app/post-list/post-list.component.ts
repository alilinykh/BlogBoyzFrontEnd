import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../post';
import {PostService} from '../service/post-service';
import { User } from '../user';
import { CommentService } from '../service/comment-service';
import { Comment } from "../comment";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() userLoggedin = false;
  @Input() showNewPost =false;
  @Input() loggedInUser: User;
  userName: String
  posts: Post[];
  comment: Comment;

  

  constructor(public postService: PostService, public commentService: CommentService  ) {
    this.comment = new Comment();
  }

  ngOnInit() {
    this.getAllPost()
  }

  async deletePost(id) {
   await this.postService.delete(id).then(data => {
      console.log("success")
      this.getAllPost()
    })
  };

  getPostByTag(tag : string){
    this.postService.findByTag(tag).subscribe(data => {
      this.posts = data;
    })
  }

   getAllPost(){
      this.postService.findAll().subscribe(data => {   
      this.posts = data;
    });
  }

  async onSubmit(post_id : number) {
    await this.commentService.saveComment(this.comment , post_id).then( () => console.log("success"))
    this.getAllPost();
    this.comment.content = ""
  }

}
