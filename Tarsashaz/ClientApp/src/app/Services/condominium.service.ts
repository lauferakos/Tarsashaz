import { Injectable } from '@angular/core';
import { Condominium } from '../Models/condominium.model';
import { BillType } from '../Enums/BillType';
import { Role } from '../Enums/Role';
import { Observable, of as observableOf } from 'rxjs';
import { Range } from '../Enums/Range';
import { Priority } from '../Enums/Priority';
import { AppState } from '../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import {selectConCommonCharge } from '../Store/Selectors/condominium.selectors';

@Injectable()
export class CondominiumService {
  constructor(private store: Store<AppState>) {

  }

  getCondominiumByFlatId(id: number): Observable<Condominium>{
    return observableOf({
      id: 1,
      crId: 1,
      address: {
        postCode: 1234,
        city: 'Budapest',
        street: 'Erzsébet körút',
        number: 2,
        floor: null,
        door: null,
      },
      flats: [
        {
          id: 1,
          ownerId: 1,
          address: {
            postCode: 1,
            city: 'a',
            street: 'a',
            number: 1,
            floor: 1,
            door: 1
          },
          bills: [],
          balances: [],
          flatDatas: []
        }
      ],
      bills: [
        {
          id: 1,
          type: BillType.Water,
          pic: null,
          isPaid: false,
          amount: 1000000,
          user: {
            name: 'Akos',
            email: 'akos@gmail.com',
            token: '1561',
            id: 454,
            role: Role.cr,
            phone: '12345',
            flats:[]
          },
          destAddress: {
            postCode: 123,
            city: 'Tevel',
            street: 'Dorogi u.',
            number: 340,
            floor: 1,
            door: 1
          },
          items: [
            {
              name: 'teszt1',
              vat: 25,
              gross: 500000
            },
            {
              name: 'teszt2',
              vat: 25,
              gross: 200000
            },
            {
              name: 'teszt3',
              vat: 25,
              gross: 150000
            },
          ],
          provider: {
            address: {
              postCode: 1234,
              city: 'Budapest',
              street: 'asd út',
              number: 3,
              floor: 1,
              door: 2
            },
            phone: '123145',
            email: 'asd@gmail.com',
            accountNum: 1454431154487,
          },
          billDate: {
            startDate: new Date('2020-09-15'),
            payoffStart: new Date('2020-09-15'),
            payoffEnd: new Date('2020-10-15'),
            deadline: new Date('2020-11-15'),
          }
        },
        {
          id: 2,
          type: BillType.Electric,
          pic: null,
          isPaid: true,
          amount: 2000000,
          user: {
            name: 'Akos',
            email: 'akos@gmail.com',
            token: '1561',
            id: 454,
            role: Role.cr,
            phone: '12345',
            flats:[]
          },
          destAddress: {
            postCode: 123,
            city: 'Tevel',
            street: 'Dorogi u.',
            number: 340,
            floor: 1,
            door: 1
          },
          items: [
            {
              name: 'item1',
              vat: 25,
              gross: 200000
            },
            {
              name: 'item2',
              vat: 25,
              gross: 400000
            },
            {
              name: 'item3',
              vat: 25,
              gross: 300000
            },
          ],
          provider: {
            address: {
              postCode: 1234,
              city: 'Budapest',
              street: 'asd út',
              number: 3,
              floor: 1,
              door: 2
            },
            phone: '123145',
            email: 'asd@gmail.com',
            accountNum: 1454431154487,
          },
          billDate: {
            startDate: new Date('2020-09-15'),
            payoffStart: new Date('2020-09-15'),
            payoffEnd: new Date('2020-10-15'),
            deadline: new Date('2020-11-15'),
          }
        },
        {
          id: 3,
          type: BillType.Heating,
          pic: null,
          isPaid: true,
          amount: 500000,
          user: {
            name: 'Akos',
            email: 'akos@gmail.com',
            token: '1561',
            id: 454,
            role: Role.cr,
            phone: '12345',
            flats:[]
          },
          destAddress: {
            postCode: 123,
            city: 'Tevel',
            street: 'Dorogi u.',
            number: 340,
            floor: 1,
            door: 1
          },
          items: [
            {
              name: 'item1',
              vat: 25,
              gross: 100000
            },
            {
              name: 'item2',
              vat: 25,
              gross: 150000
            },
            {
              name: 'item3',
              vat: 25,
              gross: 200000
            },
          ],
          provider: {
            address: {
              postCode: 1234,
              city: 'Budapest',
              street: 'asd út',
              number: 3,
              floor: 1,
              door: 2
            },
            phone: '123145',
            email: 'asd@gmail.com',
            accountNum: 1454431154487,
          },
          billDate: {
            startDate: new Date('2020-09-15'),
            payoffStart: new Date('2020-09-15'),
            payoffEnd: new Date('2020-10-15'),
            deadline: new Date('2020-11-15'),
          }
        },
        {
          id: 4,
          type: BillType.Water,
          pic: null,
          isPaid: false,
          amount: 2000000,
          user: {
            name: 'Akos',
            email: 'akos@gmail.com',
            token: '1561',
            id: 454,
            role: Role.cr,
            phone: '12345',
            flats: []
          },
          destAddress: {
            postCode: 123,
            city: 'Tevel',
            street: 'Dorogi u.',
            number: 340,
            floor: 1,
            door: 1
          },
          items: [
            {
              name: 'teszt1',
              vat: 25,
              gross: 500000
            },
            {
              name: 'teszt2',
              vat: 25,
              gross: 200000
            },
            {
              name: 'teszt3',
              vat: 25,
              gross: 150000
            },
          ],
          provider: {
            address: {
              postCode: 1234,
              city: 'Budapest',
              street: 'asd út',
              number: 3,
              floor: 1,
              door: 2
            },
            phone: '123145',
            email: 'asd@gmail.com',
            accountNum: 1454431154487,
          },
          billDate: {
            startDate: new Date('2020-08-15'),
            payoffStart: new Date('2020-08-15'),
            payoffEnd: new Date('2020-09-15'),
            deadline: new Date('2020-10-15'),
          }
        },
        {
          id: 5,
          type: BillType.Electric,
          pic: null,
          isPaid: true,
          amount: 3000000,
          user: {
            name: 'Akos',
            email: 'akos@gmail.com',
            token: '1561',
            id: 454,
            role: Role.cr,
            phone: '12345',
            flats: []
          },
          destAddress: {
            postCode: 123,
            city: 'Tevel',
            street: 'Dorogi u.',
            number: 340,
            floor: 1,
            door: 1
          },
          items: [
            {
              name: 'item1',
              vat: 25,
              gross: 200000
            },
            {
              name: 'item2',
              vat: 25,
              gross: 400000
            },
            {
              name: 'item3',
              vat: 25,
              gross: 300000
            },
          ],
          provider: {
            address: {
              postCode: 1234,
              city: 'Budapest',
              street: 'asd út',
              number: 3,
              floor: 1,
              door: 2
            },
            phone: '123145',
            email: 'asd@gmail.com',
            accountNum: 1454431154487,
          },
          billDate: {
            startDate: new Date('2020-08-15'),
            payoffStart: new Date('2020-08-15'),
            payoffEnd: new Date('2020-09-15'),
            deadline: new Date('2020-10-15'),
          }
        },
        {
          id: 6,
          type: BillType.Heating,
          pic: null,
          isPaid: true,
          amount: 800000,
          user: {
            name: 'Akos',
            email: 'akos@gmail.com',
            token: '1561',
            id: 454,
            role: Role.cr,
            phone: '12345',
            flats: []
          },
          destAddress: {
            postCode: 123,
            city: 'Tevel',
            street: 'Dorogi u.',
            number: 340,
            floor: 1,
            door: 1
          },
          items: [
            {
              name: 'item1',
              vat: 25,
              gross: 100000
            },
            {
              name: 'item2',
              vat: 25,
              gross: 150000
            },
            {
              name: 'item3',
              vat: 25,
              gross: 200000
            },
          ],
          provider: {
            address: {
              postCode: 1234,
              city: 'Budapest',
              street: 'asd út',
              number: 3,
              floor: 1,
              door: 2
            },
            phone: '123145',
            email: 'asd@gmail.com',
            accountNum: 1454431154487,
          },
          billDate: {
            startDate: new Date('2020-08-15'),
            payoffStart: new Date('2020-08-15'),
            payoffEnd: new Date('2020-09-15'),
            deadline: new Date('2020-10-15'),
          }
        }
      ],
      commonCharge: 100,
      announcements: [
        {
          id: 1,
          senderId: 1,
          senderName: "Laufer Ákos",
          range: Range.resident,
          date: new Date(),
          priority: Priority.low,
          text: "Tisztelt Lakók! \
               A jövő héten felújítási munkálatok zajlanak a földszinten. Az okozott kellemetlenségekért elnézésüket kérjük"
        },
        {
          id: 2,
          senderId: 1,
          senderName: "Laufer Ákos",
          range: Range.resident,
          date: new Date(),
          priority: Priority.medium,
          text: "Tisztelt Lakók! \
               A héten lomtalanítás lesz, aki igényli,használhatja a közös tárolót, pakolás céljából. "
        },
        {
          id: 3,
          senderId: 1,
          senderName: "Laufer Ákos",
          range: Range.resident,
          date: new Date(),
          priority: Priority.high,
          text: "Tisztelt Lakók! \
               A jövő hét kedden lakógyűlés lesz, a földszinti irodában. Mindenki jelenlétére számítunk!"
        },
        {
          id:4,
          senderId: 1,
          senderName: "Laufer Ákos",
          range: Range.resident,
          date: new Date(),
          priority: Priority.low,
          text: "Tisztelt Lakók! \
               Csőtörés keletkezett a földszinten, a hiba megoldásán dolgozunk!"
        },
      ],
      problems: []
    });
  }

  getCommonCharge(): number {
    let condominium$ = this.store.pipe(select(selectConCommonCharge));
    let commonCharge: number;
    condominium$.subscribe(c => commonCharge = c);
    return commonCharge;
  }
}
