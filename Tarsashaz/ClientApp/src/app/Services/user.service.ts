import { Injectable } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angular5-social-login';
import { Platform } from '../Enums/Platform';
import { User } from '../Models/user.model';
import { Observable, of as observableOf} from 'rxjs';


@Injectable()
export class UserService {
  constructor(private socialAuthService: AuthService) {

  }

  async signIn(socialPlatform: string): Promise<SocialUser>{
    let socialPlatformProvider;
    if (socialPlatform == Platform.Facebook) {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == Platform.Google) {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    return this.socialAuthService.signIn(socialPlatformProvider);

  }
  putUserToSessionStorage(user: SocialUser) {
    sessionStorage.setItem('login_token', user.token);
  }

  removeUserFromSessionStorage() {
    sessionStorage.removeItem('login_token');
  }
  signOut(): Observable<boolean>{
    this.socialAuthService.signOut();
    this.removeUserFromSessionStorage();
    return observableOf(true);
  }

  isAuthenticated(): boolean {
    let token = sessionStorage.getItem('login_token');

    if (token) {
      return true;
    }
    else return false;
  }
}
