import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../States/app.state';
import { UserService, UserLoginStatus} from '../../Services/user.service';
import { UserLoggedIn, USER_LOGGED_IN, UserLoggedInSuccess, UserLoggedOut, USER_LOGGED_OUT, UserLoggedOutSuccess, UserDataChanged, USER_DATA_CHANGED, UserDataChangedSuccess } from '../Actions/user.actions';

import { switchMap } from 'rxjs/operators';
import { SocialUser } from 'angular5-social-login';
import { Router } from '@angular/router';
import { Role } from '../../Enums/Role';
import { User } from '../../Models/user.model';

import * as FlatActions from '../Actions/flat.actions';
@Injectable()
export class UserEffects {
  @Effect()
  userLoggedIn$ = this.actions$.pipe(
    ofType<UserLoggedIn>(USER_LOGGED_IN),
    switchMap((u: UserLoggedIn) => this.userService.signIn(u.payload)),
    switchMap((user: SocialUser) => this.userService.login(user)),
    switchMap((result: UserLoginStatus) => {
      if (result.user) {
        console.log(result.user);
        this.userService.putUserToSessionStorage(result.user);
       
        this.userService.loginAsCR();
        
      }
      if (result.firstLogin) {   
        this.userService.firstLogin();
        this.router.navigate(['/firstlogin']);
      }
      else {
        this.router.navigate(['/']);
      }
      if (result.user.flats) {
        this.store.dispatch(new FlatActions.FlatsAddedSuccess(result.user.flats));
      }
      
      return of(new UserLoggedInSuccess(result.user)
      )
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
    switchMap((u: User) => {
      return of(new UserDataChangedSuccess(u));
    })
  );

  constructor(private store: Store<AppState>, private actions$: Actions, private userService: UserService,private router:Router) {
  }
}
