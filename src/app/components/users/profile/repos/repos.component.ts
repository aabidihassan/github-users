import {Component, Input, OnInit} from '@angular/core';
import {forkJoin, Observable, switchMap} from "rxjs";
import {Repository} from "../../../../models/repository.model";
import {UsersService} from "../../../../services/users/users.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  @Input() login: string;
  repos$: Observable<Repository[]>;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.repos$ = this.usersService.getReposByLogin(this.login).pipe(
      switchMap(repos => {
        const requests = repos.map(repo =>
          this.usersService.getRepoDataByLoginAndRepo(this.login, repo.name).pipe(
            map(({commits, issues, pulls}) => ({...repo, commits, issues, pulls}))
          )
        );
        return forkJoin(requests);
      })
    );

  }

}
