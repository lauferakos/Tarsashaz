import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../States/app.state';
import { UserService} from '../../Services/user.service';
import { UserLoggedIn, USER_LOGGED_IN, UserLoggedInSuccess, UserLoggedOut, USER_LOGGED_OUT, UserLoggedOutSuccess } from '../Actions/user.actions';

import { switchMap } from 'rxjs/operators';
import { SocialUser } from 'angular5-social-login';
import { Router } from '@angular/router';
import { Role } from '../../Enums/Role';


@Injectable()
export class UserEffects {
  @Effect()
  userLoggedIn$ = this.actions$.pipe(
    ofType<UserLoggedIn>(USER_LOGGED_IN),
    switchMap((u: UserLoggedIn) => this.userService.signIn(u.payload)),
    switchMap((user: SocialUser) => {
      if (user) {
        this.userService.putUserToSessionStorage(user);
        this.userService.firstLogin();
        this.router.navigate(['/firstlogin']);
        return of(new UserLoggedInSuccess({ name: user.name, email: user.email, token: user.token, id: user.id, role: Role.cr }))
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

  constructor(private store: Store<AppState>, private actions$: Actions, private userService: UserService,private router:Router) {
  }
}
