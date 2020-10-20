import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectUserBalance } from '../../../Store/Selectors/user.selectors';
import * as UserActions from '../../../Store/Actions/user.actions';

@Component({
    selector: 'app-user-balance',
    templateUrl: './user-balance.component.html',
    styleUrls: ['./user-balance.component.css']
})
/** UserBalance component*/
export class UserBalanceComponent implements OnInit {
  balance: number = 0;
  selected: number = 1000;
  /** UserBalance ctor */
  constructor(private store: Store<AppState>) {

  }
  ngOnInit(): void {
    this.store.pipe(select(selectUserBalance)).subscribe(bal => {
      if (bal) {
        this.balance = bal;
      }
      else this.balance = 0;
    });
    }

  successfulPayment($event) {
    console.log(+$event);
    this.store.dispatch(new UserActions.UserBalanceChanged(this.balance + +$event));
  }
}
