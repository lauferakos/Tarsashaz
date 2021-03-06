import { NgModule } from "@angular/core";
import { FlatRoutingModule } from "./RoutingModules/flat-routing.module";

import { AuthGuardService as AuthGuard } from '../Guards/auth-guard.service';
import { FirstLoginSavedGuardService as FirstLoginSavedGuard } from '../Guards/first-login-saved-guard.service';

@NgModule({
  imports: [
    FlatRoutingModule
  ],
  declarations: [
  ],
  providers: [AuthGuard, FirstLoginSavedGuard]
})
export class FlatModule {

}
