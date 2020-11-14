import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User[]=[];
  url = 'https://api.github.com/users/';
  token = '?access_token= 7676941243a5947d9b71b06171ac26b88099d860 ';

  constructor(private http: HttpClient) { }
  
  searchUser(search: string){
    interface data {
      avatar: string;
      user: string;
      following: string;
      followers: string;
      forks: string;
      public_repo: string;
      bio: any;
      location: any;
      company: any;
    }
    
}
} 
