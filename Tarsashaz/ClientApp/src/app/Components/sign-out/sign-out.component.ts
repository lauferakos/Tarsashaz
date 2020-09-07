import { Component } from '@angular/core';
import { AuthService } from 'angular5-social-login';

@Component({
    selector: 'app-sign-out',
    templateUrl: './sign-out.component.html',
    styleUrls: ['./sign-out.component.css']
})
/** SignOut component*/
export class SignOutComponent {
    /** SignOut ctor */
  constructor(private socialAuthService: AuthService) {

  }

  SignOut() {
    this.socialAuthService.signOut();
  }
}
