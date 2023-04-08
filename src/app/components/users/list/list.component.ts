import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {UsersState} from "../../../ngrx/users/users.reducer";
import {map} from "rxjs/operators";
import {UserStateEnum} from "../../../enums/userState.enum";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  usersState$: Observable<UsersState> | null = null
  readonly UserStateEnum = UserStateEnum

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.usersState$ = this.store.pipe(
      map((state) => state.usersState)
    )
  }

  showProfile(login: string): void {

  }
}
