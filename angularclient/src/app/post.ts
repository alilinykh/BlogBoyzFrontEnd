import DateTimeFormat = Intl.DateTimeFormat;
import { User } from './user';

export class Post {
  post_id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  tag: string;
  user_id: number
  author: string
  comments: Comment[];

   constructor() {
      this.post_id = null;
      this.title = "";
      this.content ="";
      this.image = "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg";
      this.date = null;
      this.tag = "OTHER"
      this.user_id = 1;
      this.author = ""
   };
}
