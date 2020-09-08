import { Component } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { AppState } from '../../../Store/States/app.state';
import { Store } from '@ngrx/store';
import { User } from '../../../Models/user.model';
import * as UserActions from '../../../Store/Actions/user.actions';
import { Platform } from '../../../Enums/Platform';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
/** SignIn component*/
export class SignInComponent {
  /** SignIn ctor */
  constructor(private user: UserService, private store: Store<AppState>) {

  }

  
  async socialSignIn(socialPlatform: string) {
    console.log('Dispatch UserLoggedIn')
    let platform = socialPlatform == Platform.Google ? Platform.Google : Platform.Facebook;
    this.store.dispatch(new UserActions.UserLoggedIn(platform));
    console.log('Dispatched UserLoggedIn');
  }

  signOut() {
    console.log('Dispatch UserLoggedOut')
    this.store.dispatch(new UserActions.UserLoggedOut());
    console.log('Dispatched UserLoggedOut');
  }

}
