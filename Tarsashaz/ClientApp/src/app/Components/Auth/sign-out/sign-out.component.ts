import { Component } from '@angular/core';
import { AuthService } from 'angular5-social-login';
import { UserService } from '../../../Services/user.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import * as UserActions from '../../../Store/Actions/user.actions';

@Component({
    selector: 'app-sign-out',
    templateUrl: './sign-out.component.html',
    styleUrls: ['./sign-out.component.css']
})
/** SignOut component*/
export class SignOutComponent {
    /** SignOut ctor */
  constructor(private store: Store<AppState>) {
    this.store.dispatch(new UserActions.UserLoggedOut());
  }

}
