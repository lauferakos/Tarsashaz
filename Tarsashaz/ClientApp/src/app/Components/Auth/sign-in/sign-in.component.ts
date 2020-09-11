import { Component } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { AppState } from '../../../Store/States/app.state';
import { Store } from '@ngrx/store';
import { User } from '../../../Models/user.model';
import * as UserActions from '../../../Store/Actions/user.actions';
import { Platform } from '../../../Enums/Platform';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
/** SignIn component*/
export class SignInComponent {
  /** SignIn ctor */
  constructor(private user: UserService, private store: Store<AppState>, private router: Router) {

  }

  
  async socialSignIn(socialPlatform: string) {
    console.log('Dispatch UserLoggedIn')
    let platform = socialPlatform == Platform.Google ? Platform.Google : Platform.Facebook;
    this.store.dispatch(new UserActions.UserLoggedIn(platform));
  }

}
