import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../Services/user.service';

@Injectable()
export class FirstLoginSavedGuardService implements CanActivate {
  constructor(public auth: UserService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isFirstLogin()) {
      return true;
    } else {
      return false;
    }
  }
}
