import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from './../../Models/user.model';
import { Platform } from '../../Enums/Platform';

export const USER_FIRST_LOGIN = '[USER] First Login';
export const USER_LOGGED_IN = '[USER] Logged in';
export const USER_LOGGED_IN_SUCCESS = '[USER] Logged in Success';
export const USER_LOGGED_OUT = '[USER] Logged out';
export const USER_LOGGED_OUT_SUCCESS = '[USER] Logged out Success';



export class UserFirstLogin implements Action {
  public readonly type = USER_FIRST_LOGIN;
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

export type UserActions = UserFirstLogin | UserLoggedIn | UserLoggedInSuccess | UserLoggedOut | UserLoggedOutSuccess;
