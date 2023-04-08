import {User} from "../../models/user.modele";
import {UsersActions} from "./users.actions";
import {Action} from "@ngrx/store";
import {UserStateEnum} from "../../enums/userState.enum";
import {UsersActionsTypes} from "../../enums/UsersActionsTypes";

export interface UsersState {
  users: User[],
  errorMessage: string,
  dataState: UserStateEnum
}

const initState: UsersState = {
  users: [],
  errorMessage: "",
  dataState: UserStateEnum.INITIAL
}

export function usersReducer(state: UsersState = initState, action: Action): UsersState {
  switch (action.type) {
    case UsersActionsTypes.GET_ALL_USERS:
      return {...state, dataState: UserStateEnum.LOADING}
    case UsersActionsTypes.GET_ALL_USERS_SUCCESS :
      return {...state, dataState: UserStateEnum.LOADED, users: (<UsersActions>action).payload}
    case UsersActionsTypes.GET_ALL_USERS_ERROR:
      return {...state, dataState: UserStateEnum.ERROR, errorMessage: (<UsersActions>action).payload}
    default:
      return {...state}
  }
}
