import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bill } from '../../../Models/bill.model';
import { BillType } from '../../../Enums/BillType';
import { Provider } from '../../../Models/provider.model';
import { User } from '../../../Models/user.model';
import { Role } from '../../../Enums/Role';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { selectActualFlatBills } from '../../../Store/Selectors/flat.selectors';
import { CondominiumService } from '../../../Services/condominium.service';
import { selectConBills } from '../../../Store/Selectors/condominium.selectors';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';

@Component({
    selector: 'app-bill-details',
    templateUrl: './bill-details.component.html',
    styleUrls: ['./bill-details.component.css']
})
/** BillDetails component*/
export class BillDetailsComponent implements OnInit{
  /** BillDetails ctor */
  actualUser$ = this.store.select(selectActualUser);
  bill: Bill;

  constructor(private _Activatedroute: ActivatedRoute, private store: Store<AppState>, private connService: CondominiumService) {

  }


  ngOnInit() {
    let id = Number.parseInt(this._Activatedroute.snapshot.paramMap.get("id"));
    let connId = Number.parseInt(this._Activatedroute.snapshot.paramMap.get("connId"));
    if (connId) {
      // ?

      let bills$ = this.store.pipe(select(selectConBills));
      bills$.subscribe(bills => this.bill = bills.find(b=>b.id == id))
    }
    else {
      let bills$ = this.store.pipe(select(selectActualFlatBills));
      bills$.subscribe(bills => this.bill = bills.find(b => b.id == id));
    }

  }
  }
