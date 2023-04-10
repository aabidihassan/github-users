import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../../../../services/users/users.service';
import {Observable} from 'rxjs';
import {User} from '../../../../models/user.model';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  @Input() login: string;
  followers$: Observable<User[]>;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.followers$ = this.usersService.getFollowersByLogin(this.login);
  }
}
