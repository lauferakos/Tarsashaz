import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from './../../Models/user.model';
import { Platform } from '../../Enums/Platform';

export const USER_LOGGED_IN = '[USER] Logged in';
export const USER_LOGGED_IN_SUCCESS = '[USER] Logged in Success';
export const USER_LOGGED_OUT = '[USER] Logged out';
export const USER_LOGGED_OUT_SUCCESS = '[USER] Logged out Success';
export const USER_DATA_CHANGED = '[USER] User data changed';
export const USER_DATA_CHANGED_SUCCESS = '[USER] User data changed success';
export const USER_BALANCE_CHANGED_SUCCESS = '[USER] Balance changed success';
export const USER_BALANCE_CHANGED = '[USER] Balance changed';


export class UserBalanceChanged implements Action {
  public readonly type = USER_BALANCE_CHANGED;
  constructor(public payload: number) {}
}
export class UserBalanceChangedSuccess implements Action {
  public readonly type = USER_BALANCE_CHANGED_SUCCESS;
  constructor(public payload: number) {}
}

export class UserLoggedIn implements Action {
  public readonly type = USER_LOGGED_IN;
  constructor(public payload: Platform) { }
}

export class UserLoggedInSuccess implements Action {
  public readonly type = USER_LOGGED_IN_SUCCESS;

  constructor(public payload: User) { }
}

export class UserLoggedOut implements Action {
  public readonly type = USER_LOGGED_OUT;
}

export class UserLoggedOutSuccess implements Action {
  public readonly type = USER_LOGGED_OUT_SUCCESS;
}

export class UserDataChanged implements Action {
  public readonly type = USER_DATA_CHANGED;
  constructor(public payload: User) {}
}

export class UserDataChangedSuccess implements Action {
  public readonly type = USER_DATA_CHANGED_SUCCESS;
  constructor(public payload: User) { }
}
export type UserActions = UserLoggedIn | UserLoggedInSuccess | UserLoggedOut | UserLoggedOutSuccess | UserDataChanged | UserDataChangedSuccess
  | UserBalanceChangedSuccess | UserBalanceChanged;
