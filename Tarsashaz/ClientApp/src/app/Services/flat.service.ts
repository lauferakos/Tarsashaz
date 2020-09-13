import { Injectable } from '@angular/core';
import { Flat } from '../Models/flat.model';
import { Observable, of as observableOf } from 'rxjs';

@Injectable()
export class FlatService {
    constructor() {

  }

  addFlat(f: Flat): Observable<Flat>{
    console.log('FlatService:', f);
    return observableOf(f);
  }

  getFlatById(idx: number): Observable<Flat> {
    return observableOf({
      address: {
        postCode: 1234,
        city: 'Tevel',
        street: 'Dorogi u.',
        number: 340,
        floor: 1,
        door: 1,
      },
      ownerId: 1
    });
  }
}
