import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UserService } from "../Services/user.service";

@Injectable()
export class RepresentativeGuardService implements CanActivate {
  constructor(public auth: UserService) { }
  canActivate(): boolean {
    if (!this.auth.isLoggedInAsCr()) {
      return false;
    }
    return true;
  }
}
