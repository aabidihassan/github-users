import {UsersService} from "../../services/users/users.service";
import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {Action} from "@ngrx/store";
import {GetAllUsersActionError, GetAllUsersActionSuccess, UsersActions} from "./users.actions";
import {Observable, of} from "rxjs";
import {UsersActionsTypes} from "../../enums/UsersActionsTypes";

@Injectable()
export class UsersEffects {
  constructor(private userService: UsersService, private effectActions: Actions) {
  }

  getAllUsersEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(UsersActionsTypes.GET_ALL_USERS),
      mergeMap((action: UsersActions) => {
        return this.userService.getAllUsers().pipe(
          map((users) => new GetAllUsersActionSuccess(users)),
          catchError((err) => of(new GetAllUsersActionError(err.message)))
        )
      })
    )
  );
}
