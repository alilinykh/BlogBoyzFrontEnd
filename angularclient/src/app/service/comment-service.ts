import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Comment } from '../comment';

@Injectable()
export class CommentService {
    showComment = false;
    private rootUrl = environment.url;

    constructor( public http: HttpClient){
    }


    toggleComments () {
        console.log(this.showComment)
          if (this.showComment === false) {
            this.showComment = true;
          } else {
            this.showComment = false;
          }
      }

      saveComment(comment: Comment){
          console.log(this.rootUrl+ "comment")
        return this.http.post<Comment>(this.rootUrl + "comment", comment).subscribe();
      }
    

}