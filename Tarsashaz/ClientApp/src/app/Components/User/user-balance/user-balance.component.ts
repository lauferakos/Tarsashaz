import { Component } from '@angular/core';

@Component({
    selector: 'app-user-balance',
    templateUrl: './user-balance.component.html',
    styleUrls: ['./user-balance.component.css']
})
/** UserBalance component*/
export class UserBalanceComponent {
  balance: number = 0;
  selected: number = 1000;
    /** UserBalance ctor */
    constructor() {

  }

  successfulPayment($event) {
    this.balance += +$event;
  }
}
