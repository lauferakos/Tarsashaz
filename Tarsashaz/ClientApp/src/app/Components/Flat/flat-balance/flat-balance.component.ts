import { Component, OnInit } from '@angular/core';
import { FlatBalance } from '../../../Models/flatbalance.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectActualFlatBalance, selectActualFlatBills } from '../../../Store/Selectors/flat.selectors';
import { BillType } from '../../../Enums/BillType';

@Component({
    selector: 'app-flat-balance',
    templateUrl: './flat-balance.component.html',
    styleUrls: ['./flat-balance.component.css']
})
/** FlatBalance component*/
export class FlatBalanceComponent implements OnInit{
/** FlatBalance ctor */
  balances$ = this.store.pipe(select(selectActualFlatBalance));
  waterBalance: FlatBalance = {
    type: BillType.Water,
    amount:0
  };
  heathingBalance: FlatBalance = {
    type: BillType.Heating,
    amount:0
  };
  electricBalance: FlatBalance = {
    type: BillType.Electric,
    amount: 0
  };

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.balances$.subscribe(balances => {
      if (balances.length > 0) {
        this.electricBalance = balances.filter(b => b.type == BillType.Electric)[0];
        this.waterBalance = balances.filter(b => b.type == BillType.Water)[0];
        this.heathingBalance = balances.filter(b => b.type == BillType.Heating)[0];
      }
      else {
        this.store.pipe(select(selectActualFlatBills)).subscribe(bills => {
          for (let bill of bills) {
            if (bill.isPaid == false && new Date(bill.billDate.deadline).getFullYear() == new Date().getFullYear() &&
              new Date(bill.billDate.deadline).getMonth() <= (new Date().getMonth() - 1))
            {
              switch (bill.type) {
                case BillType.Electric: {
                  this.electricBalance.amount += bill.amount;
                  break;
                }
                case BillType.Water: {
                  this.waterBalance.amount += bill.amount;
                  break;
                }
                case BillType.Heating: {
                  this.heathingBalance.amount += bill.amount;
                  break;
                }
                default: {
                  break;
                }

              }
            }
          }
        });
      }
    });
  }
}
