import { Component, OnInit } from '@angular/core';
import { FlatBalance } from '../../../Models/flatbalance.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectActualFlatBalance, selectActualFlatBills, selectActualFlat } from '../../../Store/Selectors/flat.selectors';
import { BillType } from '../../../Enums/BillType';
import { FlatService } from '../../../Services/flat.service';
import { Flat } from '../../../Models/flat.model';
import * as FlatActions from '../../../Store/Actions/flat.actions';
import { selectUserBalance } from '../../../Store/Selectors/user.selectors';
import * as UserActions from '../../../Store/Actions/user.actions';
import { Bill } from '../../../Models/bill.model';

@Component({
    selector: 'app-flat-balance',
    templateUrl: './flat-balance.component.html',
    styleUrls: ['./flat-balance.component.css']
})
/** FlatBalance component*/
export class FlatBalanceComponent implements OnInit{
/** FlatBalance ctor */
  balances$ = this.store.pipe(select(selectActualFlatBalance));
  balance: number = 0;
  bills: Bill[];
  flat: Flat;
  flatBalance: FlatBalance = {
    id: 0,
    waterAmount: 0,
    heatingAmount: 0,
    electricalAmount: 0,
    date: new Date()
  };

  constructor(private store: Store<AppState>, private flatService: FlatService) {
    this.store.pipe(select((selectActualFlat))).subscribe(
      f => this.flat = f )
  }

  payWaterBills(amount: number, type: BillType) {
    if (this.balance >= amount) {
      this.store.dispatch(new UserActions.UserBalanceChanged(this.balance - amount));
      this.successfulPayment(type);
    } 
  }
  successfulPayment(type: BillType) {
    let flat: Flat = {
      ...this.flat
    };;
    let updatedBills: Bill[] =
      this.bills.filter(bill => bill.isPaid == false && new Date(bill.billDate.deadline).getFullYear() == new Date().getFullYear() &&
        new Date(bill.billDate.deadline).getMonth() <= (new Date().getMonth() - 1) && bill.type == type);

    console.log(updatedBills);

    for (let bill of updatedBills) {
      let updatedBill: Bill ={
        ...bill,
        isPaid:true
      }
      flat.bills = flat.bills.filter(b => b.id != updatedBill.id).concat(updatedBill);
    }
    let updatedFlatBalance;
    if (type == BillType.Water) {
       updatedFlatBalance = {
        ...this.flatBalance,
        waterAmount:0
      }
    } else if (type == BillType.Electric) {
       updatedFlatBalance = {
        ...this.flatBalance,
        electricalAmount: 0
      }
    } else if (type == BillType.Heating) {
      updatedFlatBalance = {
       ...this.flatBalance,
        heatingAmount: 0
      }
    }
    console.log(updatedFlatBalance);
    flat.balances = flat.balances.filter(b => b.id != updatedFlatBalance.id).concat(updatedFlatBalance);
    console.log(flat);
    
    this.store.dispatch(new FlatActions.ActualFlatUpdated(flat));
    
    this.flatService.updateFlatbalance(updatedFlatBalance.id, updatedFlatBalance).subscribe(res =>
      console.log('Result',res));
  }

  ngOnInit() {
    this.store.select(selectUserBalance).subscribe(bal => this.balance = bal);
    this.store.select(selectActualFlatBills).subscribe(bills => this.bills = bills);
    this.balances$.subscribe(balances => {
      if (balances && balances.length > 0) {
        /*this.flatBalance = balances.filter(bal => bal.date == new Date(Math.max.apply(null, balances.map(function (e) {
          return new Date(e.date);
        }))))[0];*/
        this.flatBalance = { ...balances[0]};
        console.log('FlatBalance from DB:',this.flatBalance);
      }
      else {
        this.store.pipe(select(selectActualFlatBills)).subscribe(bills => {
          this.bills = bills;
          if (bills) {
            for (let bill of bills) {
              if (bill.isPaid == false && new Date(bill.billDate.deadline).getFullYear() == new Date().getFullYear() &&
                new Date(bill.billDate.deadline).getMonth() <= (new Date().getMonth() - 1)) {
                switch (bill.type) {
                  case BillType.Electric: {
                    this.flatBalance.electricalAmount += bill.amount;
                    break;
                  }
                  case BillType.Water: {
                    this.flatBalance.waterAmount += bill.amount;
                    break;
                  }
                  case BillType.Heating: {
                    this.flatBalance.heatingAmount += bill.amount;
                    break;
                  }
                  default: {
                    break;
                  }

                }
              }
            }
            console.log('Flatbalance:', this.flatBalance);
           
          }
        });
      }
    });
  }
}
