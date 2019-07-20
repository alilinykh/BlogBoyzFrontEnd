import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../post';
import {PostService} from '../service/post-service';
import { User } from '../user';

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
  

  constructor(private postService: PostService ) {
  }

  ngOnInit() {
    this.getAllPost()
  }

  async deletePost(id) {
   await this.postService.delete(id).then(data => {
      console.log("success")
      console.log(this.loggedInUser.user_id);
      console.log(id);
      this.getAllPost()
    })
  };

  getPostByTag(tag : string){
    this.postService.findByTag(tag).subscribe(data => {
      this.posts = data;
    })
  }

   getAllPost(){
    console.log("test")
      this.postService.findAll().subscribe(data => {   
      this.posts = data;
    });


  }
}
