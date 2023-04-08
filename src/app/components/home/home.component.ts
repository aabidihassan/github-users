import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UsersState} from "../../ngrx/users/users.reducer";
import {Store} from "@ngrx/store";
import {GetAllUsersAction} from "../../ngrx/users/users.actions";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.onGetAllUsers()
  }

  onGetAllUsers() {
    this.store.dispatch(new GetAllUsersAction({}))
  }

}
