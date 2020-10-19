import { Component, ElementRef, Input, SimpleChanges, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
declare let paypal: any;
@Component({
    selector: 'app-pay-pal-button',
    templateUrl: './pay-pal-button.component.html',
    styleUrls: ['./pay-pal-button.component.css']
})
/** PayPalButton component*/
export class PayPalButtonComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
  }
  constructor() {
    console.log('contsructor');
  }
  @Output() successfulPayment = new EventEmitter<number>();
  isVisible: boolean = false;
  @Input() price: number;
   

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
        this.successfulPayment.emit(this.price);
          //Service hívás
        })
      
    }
  };


  ngOnInit(): void {
    let isVisible = localStorage.getItem('isVisible');
    if (isVisible == 'true') {
      paypal.Button.render(this.paypalConfig, '#checkout-btn');
    }
    if (!isVisible) {
      if (this.isVisible == false) {
        this.addPayPalScript().then(() => {
          this.isVisible = true;
          localStorage.setItem('isVisible', 'true');
          paypal.Button.render(this.paypalConfig, '#checkout-btn');
        })
      }
    }
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
