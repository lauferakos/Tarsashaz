import { Action } from '@ngrx/store'
import { User } from './../../Models/user.model'
import * as Actions from './../Actions/user.actions'
import { initialUserState, UserState } from '../States/user.state';

export function userReducers (state = initialUserState, action: Actions.UserActions): UserState {
  switch (action.type) {
    case Actions.USER_LOGGED_IN_SUCCESS:
      console.log('USER_LOGGED_IN_SUCCESS');
      return {
        ...state,
        actualUser: action.payload,
        firstLogin: false
      };
    case Actions.USER_LOGGED_OUT_SUCCESS:
      console.log('USER_LOGGED_OUT_SUCCESS');
      return {
        ...state,
        actualUser: null,
        firstLogin: false
      };
    case Actions.USER_FIRST_LOGIN:
      return {
        ...state,
        firstLogin: true
      };
    default:
      return state;
  }
}
