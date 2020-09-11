import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../Services/user.service';

@Injectable()
export class FirstLoginGuardService implements CanActivate {
  constructor(public auth: UserService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isFirstLogin()) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
