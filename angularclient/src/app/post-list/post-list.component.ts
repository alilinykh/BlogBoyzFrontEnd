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

  onSubmit(post_id : number) {
    this.comment.posts_post_id = post_id
    console.log(`content: ${this.comment.content} \n post id ${this.comment.posts_post_id}`)
    this.commentService.saveComment(this.comment)
     
  }

}
