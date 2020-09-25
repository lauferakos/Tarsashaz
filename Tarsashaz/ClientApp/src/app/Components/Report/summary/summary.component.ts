import { Component, OnInit } from '@angular/core';
import { CondominiumService } from '../../../Services/condominium.service';
import { Condominium } from '../../../Models/condominium.model';
import { BillType } from '../../../Enums/BillType';
import { AppState } from '../../../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectConBills, selectConFlats } from '../../../Store/Selectors/condominium.selectors';


@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})
/** Summary component*/
export class SummaryComponent implements OnInit{
  waterAmount: number;
  heatingAmount: number;
  electricAmount: number;
  fullAmount: number;
  commonCharge: number;
  flatNumber: number;
  /** Summary ctor */
  constructor(private connService: CondominiumService, private store: Store<AppState>) {

  }

  ngOnInit() {
    let bills$ = this.store.pipe(select(selectConBills));
    let flats$ = this.store.pipe(select(selectConFlats));
    bills$.subscribe(bills => {
      for (let bill of bills) {
        switch (bill.type) {
          case BillType.Electric:
            this.electricAmount = bill.amount;
            break;
          case BillType.Water:
            this.waterAmount = bill.amount;
            break;
          case BillType.Heating:
            this.heatingAmount = bill.amount;
            break;
          default:
            break;
        }
      }
    });
    flats$.subscribe(flats => this.flatNumber = flats.length);
    this.fullAmount = this.electricAmount + this.heatingAmount + this.waterAmount;
    if (this.flatNumber != 0) {
      this.commonCharge = this.fullAmount / this.flatNumber;
    }
    else {
      this.commonCharge = 0;
    }
    }
  }
