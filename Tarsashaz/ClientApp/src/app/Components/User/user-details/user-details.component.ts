import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { User } from '../../../Models/user.model';
import { AppState } from '../../../Store/States/app.state';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';
import * as UserActions from '../../../Store/Actions/user.actions';
import { Router } from '@angular/router';
import { UserService } from '../../../Services/user.service';



@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
/** UserDetails component*/
export class UserDetailsComponent implements OnInit{
/** UserDetails ctor */

  actualUser$ = this.store.pipe(select(selectActualUser));

  actualUser: User = {
    id: 0,
    token: '',
    name: '',
    email: '',
    role: null,
    phone: '',
    flats:[],
  };

  ngOnInit() {
    this.actualUser$.subscribe(res => {
      if (res && res.id) {
        this.actualUser = {
          id: res.id,
          token: res.token,
          name: res.name,
          email: res.email,
          role: res.role,
          phone: res.phone,
          flats: res.flats
        }
      }
    });
  }

  constructor(private store: Store<AppState>, private router: Router, private userService: UserService) {
  
  }

  onSubmit() {
    if (this.actualUser.id !== 0) {
      this.store.dispatch(new UserActions.UserDataChanged(this.actualUser));
      
      this.router.navigate(['/']);
    }
    else console.log('Rossz felhasználó');
  }

}
