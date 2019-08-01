import { Injectable } from '@angular/core';
import { Post } from '../post';
import { PostService } from './post-service';

@Injectable()
export class UpdateService {
    posts: Post[];

    constructor(public postService : PostService) { 
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

}