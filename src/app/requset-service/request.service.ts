import { Injectable } from '@angular/core';
import {User } from './User';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  getUsers(){
    return Users
  }

  constructor() { }
}
