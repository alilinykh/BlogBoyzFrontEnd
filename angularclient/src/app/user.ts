import DateTimeFormat = Intl.DateTimeFormat;
import {Post} from './post';

export class User {
  user_id: number;
  name: string;
  password: string;
  
  constructor() {
    this.name = "";
    this.password ="";
  }
}
