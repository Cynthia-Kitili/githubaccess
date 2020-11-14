import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User[] = []; 

  constructor(private service:UserService) { }

  userSearched(search: string) {
    this.service.searchUser(search).then(
      (success) => {
        this.user = this.service.user;
        console.log(this.user);
      },
      (error) => {
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.userSearched('Cynthia-Kitili')
  }

}