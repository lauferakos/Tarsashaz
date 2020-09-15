import { NgModule } from "@angular/core";
import { AuthGuardService as AuthGuard } from '../Guards/auth-guard.service';
import { FirstLoginSavedGuardService as FirstLoginSavedGuard } from '../Guards/first-login-saved-guard.service';
import { AnnouncementRoutingModule } from "./RoutingModules/announcement-routing.module";

@NgModule({
  imports: [
    AnnouncementRoutingModule
  ],
  declarations: [
  ],
  providers: [AuthGuard, FirstLoginSavedGuard]
})
export class AnnouncementModule {

}
