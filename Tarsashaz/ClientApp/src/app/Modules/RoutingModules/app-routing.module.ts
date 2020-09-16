import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { CounterComponent } from '../../counter/counter.component';
import { FetchDataComponent } from '../../fetch-data/fetch-data.component';
import { HelpComponent } from '../../Components/Help/help/help.component';
import { FirstLoginSavedGuardService as FirstLoginSavedGuard } from '../../Guards/first-login-saved-guard.service';
import { AuthGuardService as AuthGuard } from '../../Guards/auth-guard.service';
import { FlatListComponent } from '../../Components/Flat/flat-list/flat-list.component';
import { UserDetailsComponent } from '../../Components/User/user-details/user-details.component';
import { ProblemReportComponent } from '../../Components/Problem/problem-report/problem-report.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'counter', component: CounterComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'profile', component: UserDetailsComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'help', component: HelpComponent },
  { path: 'problem/report', component: ProblemReportComponent }
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
