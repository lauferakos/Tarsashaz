import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';

@Component({
    selector: 'app-first-login',
    templateUrl: './first-login.component.html',
    styleUrls: ['./first-login.component.css']
})
/** FirstLogin component*/
export class FirstLoginComponent {
  actualUser$ = this.store.pipe(select(selectActualUser));

  constructor(private store: Store<AppState>) {

    }
}
