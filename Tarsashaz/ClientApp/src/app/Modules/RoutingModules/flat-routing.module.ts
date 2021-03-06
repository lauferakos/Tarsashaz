import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlatListComponent } from '../../Components/Flat/flat-list/flat-list.component';
import { AuthGuardService as AuthGuard } from '../../Guards/auth-guard.service';
import { FirstLoginSavedGuardService as FirstLoginSavedGuard } from '../../Guards/first-login-saved-guard.service';
import { DataListComponent } from '../../Components/Data/data-list/data-list.component';
import { FlatBalanceComponent } from '../../Components/Flat/flat-balance/flat-balance.component';
import { PayPalCheckOutComponent } from '../../Components/PayPal/pay-pal-check-out/pay-pal-check-out.component';
import { UploadDataComponent } from '../../Components/Data/upload-data/upload-data.component';
import { BillDetailsComponent } from '../../Components/Bill/bill-details/bill-details.component';
import { BillsListComponent } from '../../Components/Bill/bills-list/bills-list.component';
import { FlatSummaryComponent } from '../../Components/Report/flat-summary/flat-summary.component';
import { RepresentativeGuardService as RepresentativeGuard } from '../../Guards/representative-guard.service';

const flatRoutes: Routes = [
  { path: 'flat', component: FlatListComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'datas', component: DataListComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'common', component: PayPalCheckOutComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'balance', component: FlatBalanceComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'data/upload', component: UploadDataComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'bill/details/:id', component: BillDetailsComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'bill/details/:id/:connId', component: BillDetailsComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'bills', component: BillsListComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'flat/summary', component: FlatSummaryComponent, canActivate: [AuthGuard, FirstLoginSavedGuard, RepresentativeGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(flatRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FlatRoutingModule {
}
