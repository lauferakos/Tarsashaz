
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
      };
    case Actions.USER_LOGGED_OUT_SUCCESS:
      console.log('USER_LOGGED_OUT_SUCCESS');
      return {
        ...state,
        actualUser: null
      };
    case Actions.USER_DATA_CHANGED_SUCCESS:
      console.log('USER_DATA_CHANGED_SUCCESS');
      return {
        ...state,
        actualUser: action.payload
      };
    case Actions.USER_BALANCE_CHANGED_SUCCESS:
      console.log('USER_BALANCE_CHANGED_SUCCESS');
      return {
        ...state,
        balance: action.payload
      };
    default:
      return state;
  }
}

export function logout(reducer) {
  return function (state, action) {
    return reducer(action.type === Actions.USER_LOGGED_OUT_SUCCESS ? undefined : state, action);
  }
}
