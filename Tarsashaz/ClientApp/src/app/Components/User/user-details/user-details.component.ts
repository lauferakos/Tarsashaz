import { Component, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { User } from '../../../Models/user.model';
import { AppState } from '../../../States/app.state';
import { selectActualUser } from '../../../Selectors/user.selectors';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
/** UserDetails component*/
export class UserDetailsComponent{
  /** UserDetails ctor */
  actualUser$ = this.store.pipe(select(selectActualUser));
  constructor(private store: Store<AppState>) {
  
  }

}
