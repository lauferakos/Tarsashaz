import { Injectable } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angular5-social-login';
import { Platform } from '../Enums/Platform';
import { User } from '../Models/user.model';
import { Observable, of as observableOf} from 'rxjs';
import { Role } from '../Enums/Role';

export interface UserLoginStatus {
  firstLogin: boolean;
  user: User;
}

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
  login(user: SocialUser): Observable<UserLoginStatus> {
    let result: Observable<UserLoginStatus> = observableOf({
      //Ha DB-ben van akkor false, ha nincs akkor true
      firstLogin: false,
      user: {
        name: user.name,
        id: +user.id,
        email: user.email,
        token: user.token,
        //DB-ből, ha benne vannak
        role: Role.cr,
        phone: '123456789',
        flats: [
          {
            id: 1,
            ownerId: +user.id,
            address: {
              postCode: 1000,
              city: 'Budapest',
              street: 'József u',
              number: 10,
              floor:3,
              door:2
            },
            bills: [],
            flatDatas: [],
            balances:[]
          },
          {
            id: 2,
            ownerId: +user.id,
            address: {
              postCode: 1200,
              city: 'Budapest',
              street: 'Ferenc körút',
              number: 8,
              floor: 1,
              door: 2
            },
            bills: [],
            flatDatas: [],
            balances: []
          }
        ],
      }
    });
    result.subscribe((res) => {
      this.putUserToSessionStorage(res.user);
      if (res.user.role == Role.cr)
        this.loginAsCR();
    });

    return result;
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
  clearSessionStorage() {
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
    this.clearSessionStorage();
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
    return observableOf(u);
  }
}
