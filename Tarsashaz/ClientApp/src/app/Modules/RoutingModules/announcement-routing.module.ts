import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { NewAnnouncementComponent } from "../../Components/Announcement/new-announcement/new-announcement.component";
import { FirstLoginSavedGuardService as FirstLoginSavedGuard } from '../../Guards/first-login-saved-guard.service';
import { AuthGuardService as AuthGuard } from '../../Guards/auth-guard.service';
import { RepresentativeGuardService as RepresentativeGuard } from '../../Guards/representative-guard.service';

const annRoutes: Routes = [
  { path: 'announcements/new', component: NewAnnouncementComponent, canActivate: [AuthGuard, FirstLoginSavedGuard, RepresentativeGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(annRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AnnouncementRoutingModule {

}
