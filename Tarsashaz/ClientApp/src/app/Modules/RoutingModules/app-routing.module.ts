import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { CounterComponent } from '../../counter/counter.component';
import { FetchDataComponent } from '../../fetch-data/fetch-data.component';
import { HelpComponent } from '../../Components/Help/help/help.component';
import { FirstLoginSavedGuardService as FirstLoginSavedGuard } from '../../Guards/first-login-saved-guard.service';
import { AuthGuardService as AuthGuard } from '../../Guards/auth-guard.service';
import { FlatListComponent } from '../../Components/Flat/flat-list/flat-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'counter', component: CounterComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'help', component: HelpComponent },
  { path: 'flat', component: FlatListComponent, canActivate: [AuthGuard, FirstLoginSavedGuard] },
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
