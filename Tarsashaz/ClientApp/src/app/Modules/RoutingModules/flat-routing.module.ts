import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlatListComponent } from '../../Components/Flat/flat-list/flat-list.component';
import { AuthGuardService as AuthGuard } from '../../Guards/auth-guard.service';
import { FirstLoginSavedGuardService as FirstLoginSavedGuard } from '../../Guards/first-login-saved-guard.service';

const flatRoutes: Routes = [
  { path: 'flat', component: FlatListComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
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
