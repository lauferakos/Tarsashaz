import { Injectable } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';
import { Platform } from '../Enums/Platform';

@Injectable()
export class UserService {
  constructor(private socialAuthService: AuthService) {

  }

  signIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == Platform.Facebook) {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == Platform.Google) {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);        
      }
    );
  }

  signOut() {

  }
}
