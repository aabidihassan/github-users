import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../services/users/users.service";
import {Profile} from "../../../models/profile.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public login: string;
  public profile: Profile;

  constructor(private route: ActivatedRoute, private userService: UsersService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.login = params['login'])
    this.onGetProfile()
  }

  onGetProfile() {
    this.userService.getUserByLogin(this.login).subscribe(
      data => this.profile = data,
      err => alert(err.message)
    )
  }

}
