import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  constructor(private http:HttpClient) { }

  getProfileInfo(user: string){
    return this.http.get('https://api.github.com/users/'+user+ '?access_token='+environment.apikey)
  }
  getProfileRepos(user: string){
    return this.http.get('https://api.github.com/users/'+user+'/repos'+'?access_token='+environment.apikey)
  }
  
}

