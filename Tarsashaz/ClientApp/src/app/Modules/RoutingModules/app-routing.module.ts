import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { HelpComponent } from '../../Components/Help/help/help.component';
import { FirstLoginSavedGuardService as FirstLoginSavedGuard } from '../../Guards/first-login-saved-guard.service';
import { AuthGuardService as AuthGuard } from '../../Guards/auth-guard.service';
import { UserDetailsComponent } from '../../Components/User/user-details/user-details.component';
import { ProblemReportComponent } from '../../Components/Problem/problem-report/problem-report.component';
import { ReportComponent } from '../../Components/Report/report/report.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'profile', component: UserDetailsComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'help', component: HelpComponent },
  { path: 'problem/report', component: ProblemReportComponent },
  { path: 'report', component: ReportComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
