import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bill } from '../../../Models/bill.model';
import { BillType } from '../../../Enums/BillType';
import { Provider } from '../../../Models/provider.model';
import { User } from '../../../Models/user.model';
import { Role } from '../../../Enums/Role';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectActualFlatBills, selectFlats } from '../../../Store/Selectors/flat.selectors';
import { CondominiumService } from '../../../Services/condominium.service';
import { selectConBills } from '../../../Store/Selectors/condominium.selectors';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';
import * as FlatActions from '../../../Store/Actions/flat.actions';
import { Flat } from '../../../Models/flat.model';

@Component({
    selector: 'app-bill-details',
    templateUrl: './bill-details.component.html',
    styleUrls: ['./bill-details.component.css']
})
/** BillDetails component*/
export class BillDetailsComponent implements OnInit{
  /** BillDetails ctor */
  actualUser$ = this.store.select(selectActualUser);
  flats: Flat[];
  bill: Bill;

  constructor(private _Activatedroute: ActivatedRoute, private store: Store<AppState>, private connService: CondominiumService, private router: Router) {
    
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

  }


  successfulPayment($event) {
    let flat: Flat = {
      ...this.flats.find(f => f.id == this.bill.flatId)
    };;
    let newBill: Bill = {
      ...this.bill
    };
    newBill.isPaid = true;
    flat.bills = flat.bills.filter(b => b.id != this.bill.id).concat(newBill);
    console.log(flat);
    this.store.dispatch(new FlatActions.ActualFlatUpdated(flat));

  }
  }
