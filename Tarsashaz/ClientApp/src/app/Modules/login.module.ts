import { NgModule } from '@angular/core';
import { SignInComponent } from '../Components/Auth/sign-in/sign-in.component';
import { FirstLoginComponent } from '../Components/Auth/first-login/first-login.component';
import { AuthGuardService as AuthGuard } from '../Guards/auth-guard.service';
import { FirstLoginGuardService as FirstLoginGuard } from '../Guards/first-login-guard.service';
import { FirstLoginSavedGuardService as FirstLoginSavedGuard } from '../Guards/first-login-saved-guard.service';
import { SignOutComponent } from '../Components/Auth/sign-out/sign-out.component';
import { LoginRoutingModule } from './RoutingModules/login-routing.module';

@NgModule({
  imports: [
    LoginRoutingModule
  ],
  declarations: [
    SignInComponent,
    FirstLoginComponent,
    SignOutComponent
  ],
  providers: [AuthGuard, FirstLoginGuard, FirstLoginSavedGuard]
})
export class LoginModule {
}
