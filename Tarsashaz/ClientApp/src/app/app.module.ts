
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginRoutingModule } from './Modules/RoutingModules/login-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './Modules/RoutingModules/app-routing.module';
import { FlatRoutingModule } from './Modules/RoutingModules/flat-routing.module';
import { AnnouncementRoutingModule } from './Modules/RoutingModules/announcement-routing.module';
import { ChartsModule, ThemeService } from 'ng2-charts';

// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';


// Components
import { AppComponent } from './app.component';
import { NavMenuComponent } from './Components/Header/nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SuccessfulFirstLoginComponent } from './Components/Auth/successful-first-login/successful-first-login.component';
import { FirstLoginUserInfoComponent } from './Components/Auth/first-login-user-info/first-login-user-info.component';
import { HelpComponent } from './Components/Help/help/help.component';
import { SignInComponent } from './Components/Auth/sign-in/sign-in.component';
import { SignOutComponent } from './Components/Auth/sign-out/sign-out.component';
import { UserDetailsComponent } from './Components/User/user-details/user-details.component';
import { FirstLoginComponent } from './Components/Auth/first-login/first-login.component';
import { AnnouncementListComponent } from './Components/Announcement/announcement-list/announcement-list.component';
import { FlatDetailsComponent } from './Components/Flat/flat-details/flat-details.component';
import { FirstLoginFormComponent } from './Components/Auth/first-login-form/first-login-form.component';
import { FlatListComponent } from './Components/Flat/flat-list/flat-list.component';
import { AddFlatComponent } from './Components/Flat/add-flat/add-flat.component';
import { NewAnnouncementComponent } from './Components/Announcement/new-announcement/new-announcement.component';
import { ProblemReportComponent } from './Components/Problem/problem-report/problem-report.component';
import { BillDetailsComponent } from './Components/Bill/bill-details/bill-details.component';
import { BillsListComponent } from './Components/Bill/bills-list/bills-list.component';
import { UploadDataComponent } from './Components/Data/upload-data/upload-data.component';
import { DataListComponent } from './Components/Data/data-list/data-list.component';
import { PayPalCheckOutComponent } from './Components/PayPal/pay-pal-check-out/pay-pal-check-out.component';
import { FlatBalanceComponent } from './Components/Flat/flat-balance/flat-balance.component';
import { ReportComponent } from './Components/Report/report/report.component';
import { DoughnutChartComponent } from './Components/Report/doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './Components/Report/bar-chart/bar-chart.component';
import { SummaryComponent } from './Components/Report/summary/summary.component';
import { ProblemListComponent } from './Components/Problem/problem-list/problem-list.component';
import { AddBillComponent } from './Components/Bill/add-bill/add-bill.component';
import { UserBalanceComponent } from './Components/User/user-balance/user-balance.component';
import { PayPalButtonComponent } from './Components/PayPal/pay-pal-button/pay-pal-button.component';

// Services
import { UserService } from './Services/user.service';
import { HelpService } from './Services/help.service';
import { AnnouncementService } from './Services/announcement.service';
import { FlatService } from './Services/flat.service';
import { CondominiumService } from './Services/condominium.service';
import { FirstloginService } from './Services/firstlogin.service';
import { ProblemService } from './Services/problem.service';

// Guards
import { AuthGuardService as AuthGuard } from './Guards/auth-guard.service';
import { FirstLoginGuardService as FirstLoginGuard } from './Guards/first-login-guard.service';
import { FirstLoginSavedGuardService as FirstLoginSavedGuard } from './Guards/first-login-saved-guard.service';
import { RepresentativeGuardService as RepresentativeGuard } from './Guards/representative-guard.service';


// Social Login
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular5-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("1466949750156555")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("33269903036-vjfdlckcvln3tpng0ipp9khsmtjrktph.apps.googleusercontent.com")
      },
    ]
  );
  return config;
}

// Reducers
import { appReducers } from './Store/Reducers/app.reducer';
// Effects
import { UserEffects } from './Store/Effects/user.effects';
import { FlatEffects } from './Store/Effects/flat.effects';
import { AnnouncementEffects } from './Store/Effects/announcement.effects';
import { CondominiumEffects } from './Store/Effects/condominium.effects';

// Environment
import { environment } from '../environments/environment';
import { LOCALE_ID } from '@angular/core';
import { logout } from './Store/Reducers/user.reducer';
import { ProblemEffects } from './Store/Effects/problem.effects';







@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SignInComponent,
    SignOutComponent,
    UserDetailsComponent,
    FirstLoginComponent,
    SuccessfulFirstLoginComponent,
    FirstLoginUserInfoComponent,
    HelpComponent,
    AnnouncementListComponent,
    FlatDetailsComponent,
    FirstLoginFormComponent,
    FlatListComponent,
    AddFlatComponent,
    NewAnnouncementComponent,
    ProblemReportComponent,
    BillDetailsComponent,
    BillsListComponent,
    UploadDataComponent,
    DataListComponent,
    PayPalCheckOutComponent,
    FlatBalanceComponent,
    ReportComponent,
    DoughnutChartComponent,
    BarChartComponent,
    SummaryComponent,
    ProblemListComponent,
    AddBillComponent,
    UserBalanceComponent,
    PayPalButtonComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatRadioModule,
    SocialLoginModule,
    AppRoutingModule,
    LoginRoutingModule,
    FlatRoutingModule,
    AnnouncementRoutingModule,
    StoreModule.forRoot(appReducers, { metaReducers: [logout] }),
    EffectsModule.forRoot([UserEffects, FlatEffects, AnnouncementEffects, CondominiumEffects, ProblemEffects]),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    { provide: LOCALE_ID, useValue: 'en-GB' },
    UserService,
    AuthGuard,
    FirstLoginGuard,
    FirstLoginSavedGuard,
    RepresentativeGuard,
    HelpService,
    AnnouncementService,
    FlatService,
    CondominiumService,
    ThemeService,
    FirstloginService,
    ProblemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
