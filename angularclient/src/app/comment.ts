
export class Comment {
  comment_id: number;
  content: string;
  posts_post_id: number;
  

   constructor() {
     this.comment_id = 0;
     this.content = "";
     this.posts_post_id = 0;
   }
}