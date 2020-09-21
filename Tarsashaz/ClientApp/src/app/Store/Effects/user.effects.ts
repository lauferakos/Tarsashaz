import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../States/app.state';
import { UserService} from '../../Services/user.service';
import { UserLoggedIn, USER_LOGGED_IN, UserLoggedInSuccess, UserLoggedOut, USER_LOGGED_OUT, UserLoggedOutSuccess, UserDataChanged, USER_DATA_CHANGED, UserDataChangedSuccess } from '../Actions/user.actions';

import { switchMap } from 'rxjs/operators';
import { SocialUser } from 'angular5-social-login';
import { Router } from '@angular/router';
import { Role } from '../../Enums/Role';
import { User } from '../../Models/user.model';


@Injectable()
export class UserEffects {
  @Effect()
  userLoggedIn$ = this.actions$.pipe(
    ofType<UserLoggedIn>(USER_LOGGED_IN),
    switchMap((u: UserLoggedIn) => this.userService.signIn(u.payload)),
    switchMap((user: SocialUser) => {
      if (user) {
        console.log(user);
        this.userService.putUserToSessionStorage(user);
        this.userService.firstLogin();
        this.userService.loginAsCR();
        this.router.navigate(['/firstlogin']);
        return of(new UserLoggedInSuccess({ name: user.name, email: user.email, token: user.token, id: +user.id, role: Role.cr, phone:'' }))
      }
    })
  );

  @Effect()
  userLoggedOut$ = this.actions$.pipe(
    ofType<UserLoggedOut>(USER_LOGGED_OUT),
    switchMap(() => this.userService.signOut()),
    switchMap((success: boolean) => {
      if (success) {
        this.router.navigate(['/login']);
        return of(new UserLoggedOutSuccess());
      }
    })
  );

  @Effect()
  userDataChanged$ = this.actions$.pipe(
    ofType<UserDataChanged>(USER_DATA_CHANGED),
    switchMap((u: UserDataChanged) => this.userService.updateActualUser(u.payload)),
    switchMap((res: User) => {
      if (res) {
        return of(new UserDataChangedSuccess(res));
      }
    })
  );

  constructor(private store: Store<AppState>, private actions$: Actions, private userService: UserService,private router:Router) {
  }
}
