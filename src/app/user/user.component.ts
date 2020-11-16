import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo-service/repo.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  info: any;
  Repos: any;
  
  
  constructor(private repoService: RepoService) { }
  getUserInfo(user: string) {

    this.repoService.getProfileInfo(user).subscribe(info => {
      
      this.info = info;
    });

    this.repoService.getProfileRepos(user).subscribe(Repos => {
      
      this.Repos = Repos;
    });
  }
  ngOnInit(): void {
    this.getUserInfo('Cynthia-Kitili');
  }

}