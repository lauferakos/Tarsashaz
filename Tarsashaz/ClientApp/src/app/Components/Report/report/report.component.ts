import { Component, OnInit } from '@angular/core';
import { CondominiumService } from '../../../Services/condominium.service';
import { Condominium } from '../../../Models/condominium.model';
import { Router } from '@angular/router';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectConBills, selectConId, selectCondominiums } from '../../../Store/Selectors/condominium.selectors';
import { Bill } from '../../../Models/bill.model';
import { selectActualUser } from '../../../Store/Selectors/user.selectors';
import * as CondominiumActions from '../../../Store/Actions/condominium.actions';


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

  crId: number;
  constructor(private connService: CondominiumService, private router: Router, private store: Store<AppState>) {

  }
  ngOnInit() {
    
    this.store.pipe(select(selectActualUser)).subscribe(u => {
      if(u)
        this.crId = u.id
    });
    this.store.pipe(select(selectCondominiums)).subscribe(
      condominiums => {
        if (this.crId) {
          let condominium = condominiums.filter(c => c.crId == this.crId)[0];
          if (condominium) {
            this.store.dispatch(new CondominiumActions.ActualConChanged(condominium));
          }
        }
      }
    );


    this.bills$.subscribe(bills => {
      this.bills = bills;
      for (let bill of bills) {
        let year = new Date(bill.billDate.payoffStart).getFullYear();
        if (!this.years.includes(year)) {
          this.years.push(year);
        }

      }
    });

  }

  billDetails(billId: number) {
    let connId;
    this.store.pipe(select(selectConId)).subscribe(id => connId = id);
    

    this.router.navigate(['/bill/details',billId,connId]);
  }

  filterByYear(year: number) {
    this.bills$.subscribe(bills => this.bills = bills);
    this.bills = this.bills.filter(b => new Date(b.billDate.payoffStart).getFullYear() == year);
  }

  cancelFilter() {
    this.bills$.subscribe(bills => this.bills = bills);
  }
  actualBillsFilter() {
    this.bills = this.bills.filter(b => new Date(b.billDate.deadline).getFullYear() == new Date().getFullYear() &&
      new Date(b.billDate.deadline).getMonth() == (new Date().getMonth() + 1 )
      );
  }
}
