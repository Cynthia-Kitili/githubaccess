import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo-service/repo.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repo: Repository[] = [];

  constructor(public reposervice: RepoService) { }

  getRepo(search:string) {
    this.reposervice.getRepo(search).subscribe(data => {
      this.repo = data;
      console.log(this.repo)
    });
  }

  ngOnInit() {
    this.getRepo('Cynthia-Kitili');
  }

}
