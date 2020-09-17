import { Component } from '@angular/core';
import { Bill } from '../../../Models/bill.model';
import { BillType } from '../../../Enums/BillType';
import { Provider } from '../../../Models/provider.model';
import { User } from '../../../Models/user.model';
import { Role } from '../../../Enums/Role';

@Component({
    selector: 'app-bill-details',
    templateUrl: './bill-details.component.html',
    styleUrls: ['./bill-details.component.css']
})
/** BillDetails component*/
export class BillDetailsComponent {
/** BillDetails ctor */


  bill: Bill = {
    id:1,
    type: BillType.Water,
    pic: null,
    isPaid: true,
    amount: 20000,
    user: {
      name: 'Akos',
      email: 'akos@gmail.com',
      token: '1561',
      id: 454,
      role: Role.resident,
      phone:'12345'
    },
    destAddress: {
      postCode: 123,
      city: 'Tevel',
      street: 'Dorogi u.',
      number: 340,
      floor: 1,
      door:1
    },
    items: [
      {
        name: 'asd1',
        vat: 25,
        gross:5000
      },
      {
        name: 'asd2',
        vat: 25,
        gross: 5000
      },
      {
        name: 'asd3',
        vat: 25,
        gross: 5000
      },
    ],
    provider: {
      address: {
        postCode: 1234,
        city: 'Budapest',
        street: 'asd út',
        number: 3,
        floor: 1,
        door:2
      },
      phone: '123145',
      email: 'asd@gmail.com',
      accountNum:1454431154487,
    },
    billDate: {
      startDate: new Date('2020-09-15'),
      payoffStart: new Date('2020-09-15'),
      payoffEnd: new Date('2020-10-15'),
      deadline: new Date('2020-11-15'),
    }
  }

  constructor() {

  }
  }
