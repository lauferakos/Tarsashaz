import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../../Components/Auth/sign-in/sign-in.component';
import { FirstLoginComponent } from '../../Components/Auth/first-login/first-login.component';
import { AuthGuardService as AuthGuard } from '../../Guards/auth-guard.service';
import { FirstLoginGuardService as FirstLoginGuard } from '../../Guards/first-login-guard.service';
import { FirstLoginSavedGuardService as FirstLoginSavedGuard } from '../../Guards/first-login-saved-guard.service';
import { SignOutComponent } from '../../Components/Auth/sign-out/sign-out.component';


const loginRoutes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'firstlogin', component: FirstLoginComponent, canActivate: [AuthGuard, FirstLoginGuard] },
  { path: 'logout', component: SignOutComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule {
}
