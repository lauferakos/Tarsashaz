
// Modules
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './RoutingModules/login-routing.module';

// Components


// Guards
import { AuthGuardService as AuthGuard } from '../Guards/auth-guard.service';
import { FirstLoginGuardService as FirstLoginGuard } from '../Guards/first-login-guard.service';
import { FirstLoginSavedGuardService as FirstLoginSavedGuard } from '../Guards/first-login-saved-guard.service';



@NgModule({
  imports: [
    LoginRoutingModule
  ],
  declarations: [

  ],
  providers: [AuthGuard, FirstLoginGuard, FirstLoginSavedGuard]
})
export class LoginModule {
}
