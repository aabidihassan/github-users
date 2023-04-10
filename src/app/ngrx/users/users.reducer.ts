import {User} from "../../models/user.model";
import {UsersActions} from "./users.actions";
import {Action} from "@ngrx/store";
import {StateEnum} from "../../enums/userState.enum";
import {UsersActionsTypes} from "../../enums/UsersActionsTypes";

export interface UsersState {
  users: User[],
  errorMessage: string,
  dataState: StateEnum
}

const initState: UsersState = {
  users: [],
  errorMessage: "",
  dataState: StateEnum.INITIAL
}

export function usersReducer(state: UsersState = initState, action: Action): UsersState {
  switch (action.type) {
    case UsersActionsTypes.GET_ALL_USERS:
      return {...state, dataState: StateEnum.LOADING}
    case UsersActionsTypes.GET_ALL_USERS_SUCCESS :
      return {...state, dataState: StateEnum.LOADED, users: (<UsersActions>action).payload}
    case UsersActionsTypes.GET_ALL_USERS_ERROR:
      return {...state, dataState: StateEnum.ERROR, errorMessage: (<UsersActions>action).payload}
    default:
      return {...state}
  }
}
