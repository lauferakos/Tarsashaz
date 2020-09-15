
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

// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

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


// Services
import { UserService } from './Services/user.service';
import { HelpService } from './Services/help.service';
import { AnnouncementService } from './Services/announcement.service';
import { FlatService } from './Services/flat.service';


// Guards
import { AuthGuardService as AuthGuard } from './Guards/auth-guard.service';
import { FirstLoginGuardService as FirstLoginGuard } from './Guards/first-login-guard.service';
import { FirstLoginSavedGuardService as FirstLoginSavedGuard} from './Guards/first-login-saved-guard.service';


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

// Environment
import { environment } from '../environments/environment';






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
    NewAnnouncementComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    SocialLoginModule,
    AppRoutingModule,
    LoginRoutingModule,
    FlatRoutingModule,
    AnnouncementRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, FlatEffects, AnnouncementEffects]),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    UserService, AuthGuard, FirstLoginGuard, FirstLoginSavedGuard, HelpService, AnnouncementService, FlatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
