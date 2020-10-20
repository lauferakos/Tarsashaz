import { Injectable, Inject } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angular5-social-login';
import { Platform } from '../Enums/Platform';
import { User } from '../Models/user.model';
import { Observable, of as observableOf} from 'rxjs';
import { Role } from '../Enums/Role';
import { AppState } from '../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { selectActualUser } from '../Store/Selectors/user.selectors';

export interface UserLoginStatus {
  firstLogin: boolean;
  user: User;
}

@Injectable()
export class UserService {
  baseUrl: string;
  userId: number;
  constructor(private socialAuthService: AuthService,
    private store: Store<AppState>,
    private http: HttpClient,
    @Inject('BASE_URL') baseurl: string) {
    this.baseUrl = baseurl;
  }
  // Sign in to Google/Facebook
  async signIn(socialPlatform: string): Promise<SocialUser>{
    let socialPlatformProvider;
    if (socialPlatform == Platform.Facebook) {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == Platform.Google) {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    return this.socialAuthService.signIn(socialPlatformProvider);

  }

  balanceChanged(newBalance: number,userId:number): Observable<number>{
    let url = this.baseUrl + "user/balance/" + userId;
    return this.http.post<number>(url, newBalance);
  }

  // Login
  login(user: SocialUser): Observable<UserLoginStatus> {
    let url = this.baseUrl + "user/login";
    return this.http.post<UserLoginStatus>(url, user);
  }

  
  putUserToSessionStorage(user: User) {
    sessionStorage.setItem('login_token', user.token);
  }

  loginAsCR() {
    sessionStorage.setItem('cr', 'true');
  }

  isLoggedInAsCr() {
    let result = sessionStorage.getItem('cr');

    if (result)
      return true;
    else return false;
  }
  clearStorages() {
    localStorage.clear();
    sessionStorage.clear();
  }

  firstLogin() {
    sessionStorage.setItem('first_login', 'true');
  }
  firstLoginSaved() {
    sessionStorage.removeItem('first_login');
  }

  signOut(): Observable<boolean>{
    this.socialAuthService.signOut();
    this.clearStorages();
    return observableOf(true);
  }
  isFirstLogin(): boolean {
    let first = sessionStorage.getItem('first_login');

    if (first)
      return true;
    else return false;
  }

  isAuthenticated(): boolean {
    let token = sessionStorage.getItem('login_token');

    if (token) {
      return true;
    }
    else return false;
  }

  updateActualUser(u: User): Observable<User>{
    let url = this.baseUrl + "user/" + u.id;
    return this.http.put<User>(url, u);
  }
}
