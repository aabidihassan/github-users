import {Action} from "@ngrx/store";
import {User} from "../../models/user.modele";
import {UsersActionsTypes} from "../../enums/UsersActionsTypes";

export class GetAllUsersAction implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_ALL_USERS;

  constructor(public payload: any) {
  }

}

export class GetAllUsersActionSuccess implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_ALL_USERS_SUCCESS;

  constructor(public payload: User[]) {
  }

}

export class GetAllUsersActionError implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_ALL_USERS_ERROR;

  constructor(public payload: string) {
  }

}

export type UsersActions =
  GetAllUsersAction | GetAllUsersActionSuccess | GetAllUsersActionError;
