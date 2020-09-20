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
import { BillDetailsComponent } from '../../Components/Bill/bill-details/bill-details.component';
import { UploadDataComponent } from '../../Components/Data/upload-data/upload-data.component';
import { DataListComponent } from '../../Components/Data/data-list/data-list.component';
import { BillsListComponent } from '../../Components/Bill/bills-list/bills-list.component';
import { PayPalCheckOutComponent } from '../../Components/PayPal/pay-pal-check-out/pay-pal-check-out.component';
import { FlatBalanceComponent } from '../../Components/Flat/flat-balance/flat-balance.component';
import { ReportComponent } from '../../Components/Report/report/report.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'counter', component: CounterComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'profile', component: UserDetailsComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'help', component: HelpComponent },
  { path: 'problem/report', component: ProblemReportComponent },
  { path: 'bill/details', component: BillDetailsComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'bills', component: BillsListComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'data/upload', component: UploadDataComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'datas', component: DataListComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'common', component: PayPalCheckOutComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'balance', component: FlatBalanceComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
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
