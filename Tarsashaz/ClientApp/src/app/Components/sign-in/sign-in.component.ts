import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
/** SignIn component*/
export class SignInComponent {
  /** SignIn ctor */
  constructor(private user: UserService) {

  }
  socialSignIn(socialPlatform: string) {
    this.user.signIn(socialPlatform);
  }

}
