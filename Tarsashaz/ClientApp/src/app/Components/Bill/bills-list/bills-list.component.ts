import { Component } from '@angular/core';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectActualFlat } from '../../../Store/Selectors/flat.selectors';
import { Router } from '@angular/router';
import { FlatService } from '../../../Services/flat.service';
import { Bill } from '../../../Models/bill.model';

@Component({
    selector: 'app-bills-list',
    templateUrl: './bills-list.component.html',
    styleUrls: ['./bills-list.component.css']
})
/** BillsList component*/
export class BillsListComponent {
  actualFlat$ = this.store.pipe(select(selectActualFlat));
  billFilter: Function = (bill:Bill) => true;
  /** BillsList ctor */
  constructor(private store: Store<AppState>, private router: Router, private flatService: FlatService) {

  }

  billDetails(id: number) {
    this.router.navigate(['/bill/details',id]);
  }

  addBills() {
    this.flatService.addBills(5).subscribe(bills => console.log(bills));
  }

  cancelFilter() {
    this.billFilter = (bill: Bill) => true;
  }
  paidBillsFilter() {
    this.billFilter = (bill: Bill) => bill.isPaid == true  
  }

  notPaidBillsFilter() {
    this.billFilter = (bill: Bill) => bill.isPaid == false
  }
}
