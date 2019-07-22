import DateTimeFormat = Intl.DateTimeFormat;
import {User} from './user';

export class Post {
  post_id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  tag: string;
  user_id: number
  user: User;

   constructor() {
      this.post_id = 1;
      this.title = "";
      this.content ="";
      this.image = "leave it blank for default picture";
      this.date = null;
      this.tag = "OTHER"
      this.user_id = 1;
      this.user = null;
   };
}
