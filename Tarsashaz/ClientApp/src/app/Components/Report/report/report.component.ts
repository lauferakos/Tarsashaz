import { Component, OnInit } from '@angular/core';
import { CondominiumService } from '../../../Services/condominium.service';
import { Condominium } from '../../../Models/condominium.model';
import { Router } from '@angular/router';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectConBills, selectConId } from '../../../Store/Selectors/condominium.selectors';
import { Bill } from '../../../Models/bill.model';


@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
/** Report component*/
export class ReportComponent implements OnInit{
  /** Report ctor */
  bills$ = this.store.pipe(select(selectConBills));
  bills: Bill[] = [];
  years: number[] = [];
  constructor(private connService: CondominiumService, private router: Router, private store: Store<AppState>) {

  }
  ngOnInit() {
    this.bills$.subscribe(bills => {
      this.bills = bills;
      for (let bill of bills) {
        let year = bill.billDate.payoffStart.getFullYear();
        if (!this.years.includes(year)) {
          this.years.push(year);
        }

      }
      console.log("Évek:", this.years);
    });

  }

  billDetails(billId: number) {
    let connId;
    this.store.pipe(select(selectConId)).subscribe(id => connId = id);
    

    this.router.navigate(['/bill/details',billId,connId]);
  }

  filterByYear(year: number) {
    this.bills$.subscribe(bills => this.bills = bills);
    this.bills = this.bills.filter(b => b.billDate.payoffStart.getFullYear() == year);
  }

  cancelFilter() {
    this.bills$.subscribe(bills => this.bills = bills);
  }
  actualBillsFilter() {
    this.bills = this.bills.filter(b => b.billDate.payoffStart.getFullYear() == new Date().getFullYear() &&
      b.billDate.payoffStart.getMonth() == new Date().getMonth()
      );
  }
}
