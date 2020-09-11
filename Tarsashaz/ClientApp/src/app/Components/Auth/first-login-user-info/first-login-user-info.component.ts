import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';
import { AppState } from '../../../Store/States/app.state';

@Component({
    selector: 'app-first-login-user-info',
    templateUrl: './first-login-user-info.component.html',
    styleUrls: ['./first-login-user-info.component.css']
})
/** FirstLoginUserInfo component*/
export class FirstLoginUserInfoComponent {
  actualUser$ = this.store.pipe(select(selectActualUser));
    /** FirstLoginUserInfo ctor */
  constructor(private store: Store<AppState>) {

    }
}
