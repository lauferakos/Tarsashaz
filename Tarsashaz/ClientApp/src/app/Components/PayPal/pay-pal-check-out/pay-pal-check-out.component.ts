import { Component, AfterViewChecked, OnInit, ChangeDetectorRef } from '@angular/core';
import { CondominiumService } from '../../../Services/condominium.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../Store/States/app.state';
import { FlatService } from '../../../Services/flat.service';
import { selectActualFlat } from '../../../Store/Selectors/flat.selectors';
import { BillType } from '../../../Enums/BillType';
declare let paypal: any;

@Component({
    selector: 'app-pay-pal-check-out',
    templateUrl: './pay-pal-check-out.component.html',
    styleUrls: ['./pay-pal-check-out.component.css']
})
/** PayPalCheckOut component*/
export class PayPalCheckOutComponent implements OnInit{
  successfulPayment: boolean = false;
  price: number;


  ngOnInit() {
    let actualFlat$ = this.store.pipe(select(selectActualFlat));
    actualFlat$.subscribe(flat => {
      if (flat) {
        let result = flat.bills.find(b => b.type == BillType.CommonCharge &&
          new Date(b.billDate.startDate).getFullYear() == new Date().getFullYear() &&
          new Date(b.billDate.startDate).getMonth() == new Date().getMonth())

        if (result) {
          this.successfulPayment = true;
        }
        console.log('Payment', this.successfulPayment)
      }
    });
  }

  /** PayPalCheckOut ctor */
  constructor(private conService: CondominiumService, private store: Store<AppState>, private flatService: FlatService) {
    this.price = this.conService.getCommonCharge();
  }

  success($event) {
    this.successfulPayment = true;
    this.flatService.addCommonChargeBillToActualFlat(this.price).subscribe(bill => console.log(bill));
  }
}
