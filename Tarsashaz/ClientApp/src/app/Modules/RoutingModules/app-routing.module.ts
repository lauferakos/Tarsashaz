import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { HelpComponent } from '../../Components/Help/help/help.component';
import { FirstLoginSavedGuardService as FirstLoginSavedGuard } from '../../Guards/first-login-saved-guard.service';
import { AuthGuardService as AuthGuard } from '../../Guards/auth-guard.service';
import { UserDetailsComponent } from '../../Components/User/user-details/user-details.component';
import { ProblemReportComponent } from '../../Components/Problem/problem-report/problem-report.component';
import { ReportComponent } from '../../Components/Report/report/report.component';
import { RepresentativeGuardService as RepresentativeGuard } from '../../Guards/representative-guard.service';
import { ProblemListComponent } from '../../Components/Problem/problem-list/problem-list.component';
import { AddBillComponent } from '../../Components/Bill/add-bill/add-bill.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'profile', component: UserDetailsComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'help', component: HelpComponent },
  { path: 'problem/report', component: ProblemReportComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'report', component: ReportComponent, canActivate: [AuthGuard, FirstLoginSavedGuard, RepresentativeGuard] },
  { path: 'problems', component: ProblemListComponent, canActivate: [AuthGuard, FirstLoginSavedGuard, RepresentativeGuard] },
  { path: 'newbill', component: AddBillComponent, canActivate: [AuthGuard, FirstLoginSavedGuard, RepresentativeGuard] }
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
