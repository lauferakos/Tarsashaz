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
    this.addPayPalScript().then(() => {
      paypal.Button.render(this.paypalConfig, '#checkout-btn')
    })
  }
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AbHTdJJu9bsPFfTxcsPe3xUd_3Lbd4FmYhb85txHeIij1ceiPqgb6hxqpxkNzdHYK75whwojf_b0fHGr'
    },
    commit: true,
    payment: (data, actions) => {
      if (this.successfulPayment == false) {
        return actions.payment.create({
          payment: {
            transactions: [
              { amount: { total: this.price, currency: 'HUF' } }
            ]
          }
        })
      }
    },
    onAuthorize: (data, actions) => {
      if (this.successfulPayment == false) {
        return actions.payment.execute().then((payment) => {
          this.successfulPayment = true;
          this.flatService.addCommonChargeBillToActualFlat(this.price).subscribe(bill => console.log(bill));
        })
      }
    }
  };
  /** PayPalCheckOut ctor */
  constructor(private conService: CondominiumService, private store: Store<AppState>, private flatService: FlatService) {
    this.price = this.conService.getCommonCharge();
  }

  addPayPalScript() {
    return new Promise((resolve, reject) => {
      let scriptTagElement = document.createElement('script');
      scriptTagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptTagElement.onload = resolve;
      document.body.appendChild(scriptTagElement);
    })
  }
}
