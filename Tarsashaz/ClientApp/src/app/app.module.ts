import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AuthGuardService as AuthGuard} from './Guards/auth-guard.service';

import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular5-social-login";

import { SignInComponent } from './Components/Auth/sign-in/sign-in.component';
import { UserService } from './Services/user.service';
import { SignOutComponent } from './Components/Auth/sign-out/sign-out.component';
import { StoreModule } from '@ngrx/store';

import { UserDetailsComponent } from './Components/User/user-details/user-details.component';
import { appReducers } from './Store/Reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './Store/Effects/user.effects';
import { FirstLoginComponent } from './Components/Auth/first-login/first-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatInputModule,
    SocialLoginModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'login', component: SignInComponent },
      { path: 'counter', component: CounterComponent, canActivate: [AuthGuard] },
      { path: 'firstlogin', component: FirstLoginComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'logout', component: SignOutComponent, canActivate: [AuthGuard] }
    ]),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects]),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    UserService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
