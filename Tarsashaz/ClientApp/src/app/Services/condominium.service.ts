import { Injectable } from '@angular/core';
import { Condominium } from '../Models/condominium.model';
import { BillType } from '../Enums/BillType';
import { Role } from '../Enums/Role';

@Injectable()
export class CondominiumService {
    constructor() {

  }

  getCondominiumByUserId(id: number): Condominium{
    return {
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
            floor:1,
            door: 1
          },
          bills: [],
          balances: [],
          flatDatas:[]
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
            phone: '12345'
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
              gross: 500000
            },
            {
              name: 'item2',
              vat: 25,
              gross: 200000
            },
            {
              name: 'item3',
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
          id: 1,
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
            phone: '12345'
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
          id: 1,
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
            phone: '12345'
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
        }

      ],
      commonCharge: 10000,
      billDatas: [
        {
          type: BillType.Water,
          start: new Date('2020.01.01'),
          end: new Date('2021.01.01'),
          amounts: [
            100000, 200000, 300000, 100000, 150000, 230000, 350000, 190000, 200000, 200000, 300000, 250000,
          ]
        },
        {
          type: BillType.Electric,
          start: new Date('2020.01.01'),
          end: new Date('2021.01.01'),
          amounts: [
            300000, 400000, 500000, 400000, 350000, 250000, 350000, 190000, 230000, 240000, 320000, 280000,
          ]
        },
        {
          type: BillType.Heating,
          start: new Date('2020.01.01'),
          end: new Date('2021.01.01'),
          amounts: [
            100000, 150000, 180000, 200000, 150000, 210000, 310000, 190000, 230000, 240000, 300000, 220000,
          ]
        }
       ]
    }
  }

  getCommonChargeByFlatId(flatid: number): number {
    return 100;
  }
}
