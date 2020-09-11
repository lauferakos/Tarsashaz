
// Modules
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './RoutingModules/login-routing.module';

// Components
import { SignInComponent } from '../Components/Auth/sign-in/sign-in.component';
import { FirstLoginComponent } from '../Components/Auth/first-login/first-login.component';
import { SignOutComponent } from '../Components/Auth/sign-out/sign-out.component';

// Guards
import { AuthGuardService as AuthGuard } from '../Guards/auth-guard.service';
import { FirstLoginGuardService as FirstLoginGuard } from '../Guards/first-login-guard.service';
import { FirstLoginSavedGuardService as FirstLoginSavedGuard } from '../Guards/first-login-saved-guard.service';



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
