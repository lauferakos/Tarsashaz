import { Component, AfterViewChecked } from '@angular/core';
import { CondominiumService } from '../../../Services/condominium.service';
declare let paypal: any;

@Component({
    selector: 'app-pay-pal-check-out',
    templateUrl: './pay-pal-check-out.component.html',
    styleUrls: ['./pay-pal-check-out.component.css']
})
/** PayPalCheckOut component*/
export class PayPalCheckOutComponent implements AfterViewChecked{
  addScript: boolean = false;
  successfulPayment: boolean = false;
  price: number = 10;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AbHTdJJu9bsPFfTxcsPe3xUd_3Lbd4FmYhb85txHeIij1ceiPqgb6hxqpxkNzdHYK75whwojf_b0fHGr'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.price, currency: 'HUF' } }
          ]
        }
      })
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        this.successfulPayment = true;
      })
    }
  };
  /** PayPalCheckOut ctor */
  constructor(private conService: CondominiumService) {
    this.price = this.conService.getCommonChargeByFlatId(1);
  }

  ngAfterViewChecked(): void {

    if (!this.addScript) {
      this.addPayPalScript().then(() => {
        paypal.Button.render(this.paypalConfig,'#checkout-btn')
      })
    }
  }



  addPayPalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scriptTagElement = document.createElement('script');
      scriptTagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptTagElement.onload = resolve;
      document.body.appendChild(scriptTagElement);
    })
  }
}
