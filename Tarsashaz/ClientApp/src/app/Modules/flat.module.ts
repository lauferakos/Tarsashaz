import { NgModule } from "@angular/core";
import { FlatRoutingModule } from "./RoutingModules/flat-routing.module";

import { AuthGuardService as AuthGuard } from '../Guards/auth-guard.service';
import { FirstLoginSavedGuardService as FirstLoginSavedGuard } from '../Guards/first-login-saved-guard.service';
import { FlatListComponent } from "../Components/Flat/flat-list/flat-list.component";

@NgModule({
  imports: [
    FlatRoutingModule
  ],
  declarations: [
    FlatListComponent
  ],
  providers: [AuthGuard, FirstLoginSavedGuard]
})
export class FlatModule {

}
