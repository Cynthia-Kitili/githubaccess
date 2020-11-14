import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RepoService {
  url = 'https://api.github.com/users/';
  token = '?access_token= 7676941243a5947d9b71b06171ac26b88099d860 ';

  constructor(public http: HttpClient) {

   }
   getRepo(search:string): Observable<any> {
    return this.http.get(this.url + search + '/repos?' + this.token);
  }
}
}
