import DateTimeFormat = Intl.DateTimeFormat;
import {Post} from './post';

export class User {
  user_id: number;
  name: string;
  password: string;
  listPosts: Post[];


  constructor() {
    this.user_id = 6;
    this.name = "";
    this.password ="";
    this.listPosts = [];
  }
}
