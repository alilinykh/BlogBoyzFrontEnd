import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../post';
import {PostService} from '../service/post-service';
import { User } from '../user';
import { CommentService } from '../service/comment-service';
import { Comment } from "../comment";
import { UpdateService } from '../service/update-service';

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
  comment: Comment;

  

  constructor(public postService: PostService, public commentService: CommentService, public updateService : UpdateService  ) {
    this.comment = new Comment();
  }

  ngOnInit() {
    this.updateService.getAllPost()
  }

  async onSubmit(post_id : number) {
    await this.commentService.saveComment(this.comment , post_id).then( () => console.log("success"))
    this.updateService.getAllPost();
    this.comment.content = ""
  }

   getAllPost(){
    this.postService.findAll().subscribe(data => {   
    this.updateService.posts = data;
  });
}
}
