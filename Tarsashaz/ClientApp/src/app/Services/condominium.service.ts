import { Injectable } from '@angular/core';
import { Condominium } from '../Models/condominium.model';

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
      flats: [],
      bills: [],
      commonCharge:10000
    }
  }

  getCommonChargeByFlatId(flatid: number): number {
    return 100;
  }
}
