import { Component } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { User } from '../../../Models/user.model';
import * as UserActions from '../../../Store/Actions/user.actions';
import { Platform } from '../../../Enums/Platform';
import { Router } from '@angular/router';
import * as CondominiumActions from '../../../Store/Actions/condominium.actions';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';
import * as FlatActions from '../../../Store/Actions/flat.actions';

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
    let platform = socialPlatform == Platform.Google ? Platform.Google : Platform.Facebook;
    this.store.dispatch(new UserActions.UserLoggedIn(platform));
  }

}
