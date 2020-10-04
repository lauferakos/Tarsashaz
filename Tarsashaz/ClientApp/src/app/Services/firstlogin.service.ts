import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user.model';
import { Observable} from 'rxjs';

@Injectable()
export class FirstloginService {
  baseUrl: string;
  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseurl: string) {
    this.baseUrl = baseurl;
  }

  saveUser(u: User): Observable<User> {
    let url = this.baseUrl + "firstloginsave";
    return this.http.post<User>(url, u);
  }
}
