import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bill } from '../../../Models/bill.model';
import { BillType } from '../../../Enums/BillType';
import { Provider } from '../../../Models/provider.model';
import { User } from '../../../Models/user.model';
import { Role } from '../../../Enums/Role';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectActualFlatBills, selectFlats, selectActualFlatBalance, selectActualFlat } from '../../../Store/Selectors/flat.selectors';
import { CondominiumService } from '../../../Services/condominium.service';
import { selectConBills } from '../../../Store/Selectors/condominium.selectors';
import { selectActualUser, selectUserBalance } from '../../../Store/Selectors/user.selectors';
import * as FlatActions from '../../../Store/Actions/flat.actions';
import { Flat } from '../../../Models/flat.model';
import * as UserActions from '../../../Store/Actions/user.actions';
import { FlatBalance } from '../../../Models/flatbalance.model';
import { FlatService } from '../../../Services/flat.service';

@Component({
    selector: 'app-bill-details',
    templateUrl: './bill-details.component.html',
    styleUrls: ['./bill-details.component.css']
})
/** BillDetails component*/
export class BillDetailsComponent implements OnInit{
/** BillDetails ctor */
  balances$ = this.store.pipe(select(selectActualFlatBalance));
  actualUser$ = this.store.select(selectActualUser);
  actualFlat$ = this.store.select(selectActualFlat);
  flats: Flat[];
  bill: Bill;
  flat: Flat;
  balance: number = 0;
  notEnoughMoney: boolean = false;

  flatBalance: FlatBalance = {
    id: 0,
    waterAmount: 0,
    heatingAmount: 0,
    electricalAmount: 0,
    date: new Date()
  };


  constructor(private _Activatedroute: ActivatedRoute,
    private store: Store<AppState>,
    private connService: CondominiumService,
    private router: Router,
    private flatService: FlatService
  ) {
    
    this.store.pipe(select(selectFlats)).subscribe(flats => {
      this.flats = flats
    });
  }


  ngOnInit() {
    let id = Number.parseInt(this._Activatedroute.snapshot.paramMap.get("id"));
    let connId = Number.parseInt(this._Activatedroute.snapshot.paramMap.get("connId"));
    if (connId) {
      // ?

      let bills$ = this.store.pipe(select(selectConBills));
      bills$.subscribe(bills => {if(bills) this.bill = bills.find(b => b.id == id) })
    }
    else {
      let bills$ = this.store.pipe(select(selectActualFlatBills));
      bills$.subscribe(bills => { if (bills) this.bill = bills.find(b => b.id == id) });
      console.log(this.bill);
    }

    this.store.select(selectUserBalance).subscribe(bal => this.balance = bal);

    this.balances$.subscribe(balances => {
      if (balances && balances.length > 0) {
        this.flatBalance = { ...balances[0] }
      }
    });
  }

  PayWithBalance(amount: number) {
    if (this.balance >= amount) {
      this.store.dispatch(new UserActions.UserBalanceChanged(this.balance - amount));
      this.successfulPayment(amount);
    } else { this.notEnoughMoney = true};
  }

  successfulPayment($event) {

    let updatedFlatBalance;
    if (this.bill.type == BillType.Water) {
      updatedFlatBalance = {
        ...this.flatBalance,
        waterAmount: this.flatBalance.waterAmount - this.bill.amount
      }
    } else if (this.bill.type == BillType.Electric) {
      updatedFlatBalance = {
        ...this.flatBalance,
        electricalAmount: this.flatBalance.electricalAmount - this.bill.amount
      }
    } else if (this.bill.type == BillType.Heating) {
      updatedFlatBalance = {
        ...this.flatBalance,
        heatingAmount: this.flatBalance.heatingAmount - this.bill.amount
      }
    }

    console.log('FlatBalace: ', this.flatBalance);
    if (this.flatBalance.id != 0) {
      this.flatService.updateFlatbalance(this.flatBalance.id, updatedFlatBalance).subscribe(res =>
        console.log('Result', res));
    }
    this.actualFlat$.subscribe(
      actual => this.flat = { ...actual }
    )
    this.flat.balances = this.flat.balances.filter(b => b.id != updatedFlatBalance.id).concat(updatedFlatBalance);
    let newBill: Bill = {
      ...this.bill
    };
    newBill.isPaid = true;
    this.flat.bills = this.flat.bills.filter(b => b.id != this.bill.id).concat(newBill);
    console.log(this.flat);
    this.store.dispatch(new FlatActions.ActualFlatUpdated(this.flat));

  }


  }
