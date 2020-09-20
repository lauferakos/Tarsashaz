import { Component, OnInit } from '@angular/core';
import { CondominiumService } from '../../../Services/condominium.service';
import { Condominium } from '../../../Models/condominium.model';
import { BillType } from '../../../Enums/BillType';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})
/** Summary component*/
export class SummaryComponent implements OnInit{
  condominium: Condominium;
  waterAmount: number;
  heatingAmount: number;
  electricAmount: number;
  fullAmount: number;
  commonCharge: number;
  flatNumber: number;
  /** Summary ctor */
  constructor(private connService: CondominiumService) {

  }

  ngOnInit() {
    this.condominium = this.connService.getCondominiumByUserId(1);

    for (let bill of this.condominium.bills) {
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
    this.fullAmount = this.electricAmount + this.heatingAmount + this.waterAmount;
    this.flatNumber = this.condominium.flats.length;
    if (this.flatNumber != 0) {
      this.commonCharge = this.fullAmount / this.flatNumber;
    }
    else {
      this.commonCharge = 0;
    }
  }
}
