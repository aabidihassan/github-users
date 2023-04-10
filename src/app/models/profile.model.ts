import {User} from "./user.model";

export class Profile extends User {
  name: string;
  email: string;
  location: string;
  bio: string;
  twitter_username: string;
  company: string;
  html_url: string;
}
