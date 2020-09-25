import { Injectable } from '@angular/core';
import { Flat } from '../Models/flat.model';
import { Observable, of as observableOf } from 'rxjs';
import { AppState } from '../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectFlats, selectActualFlat } from '../Store/Selectors/flat.selectors';
import { selectActualUser } from '../Store/Selectors/user.selectors';
import { User } from '../Models/user.model';
import { Bill } from '../Models/bill.model';
import { BillType } from '../Enums/BillType';
import * as FlatActions from '../Store/Actions/flat.actions';

@Injectable()
export class FlatService {
  constructor(private store: Store<AppState>) {

  }

  addFlat(f: Flat): Observable<Flat>{
    console.log('Addflat',f);
    
    return observableOf(f);
  }
  getFlatsByUserId(userId: number): Observable<Flat[]> {
    let actualUser$ = this.store.pipe(select(selectActualUser));
    let flats: Flat[]=
    [
      {
        id: 1,
        ownerId: 5,
        address: {
          postCode: 1000,
          city: 'Budapest',
          street: 'József u',
          number: 10,
          floor: 3,
          door: 2
        },
        bills: [],
        flatDatas: [],
        balances: []
      },
      {
        id: 2,
        ownerId: 5,
        address: {
          postCode: 1200,
          city: 'Budapest',
          street: 'Ferenc körút',
          number: 8,
          floor: 1,
          door: 2
        },
        bills: [],
        flatDatas: [],
        balances: []
      }
    ]
    return observableOf(flats);
  }

  getFlatById(id: number): Observable<Flat> {
    let flats$ = this.store.pipe(select(selectFlats));
    let result: Flat;
    flats$.subscribe((flats) => result = flats.find(f => f.id == id));
    return observableOf(result);
  }

  updateActualFlat(f: Flat): Observable<Flat> {
    console.log('UppdateFlat', f);
    return observableOf(f);
  }

  addCommonChargeBillToActualFlat(amount: number) {
    let actualUser$ = this.store.pipe(select(selectActualUser));
    let actualFlat$ = this.store.pipe(select(selectActualFlat));
    let user;
    let flat: Flat;
    actualUser$.subscribe(u => user = u);
    actualFlat$.subscribe(f => flat = {
      id: f.id,
      address: f.address,
      ownerId: f.ownerId,
      flatDatas: f.flatDatas,
      balances: f.balances,
      bills: f.bills.concat(
        {
          id: 1,
          type: BillType.CommonCharge,
          user: user,
          pic: null,
          provider: null,
          billDate: {
            startDate: new Date(),
            payoffEnd: null,
            payoffStart: null,
            deadline: new Date(),
          },
          amount: amount,
          items: [
            {
              name: 'közös költség befizetése',
              vat: 0,
              gross: amount
            }
          ],
          destAddress: f.address,
          isPaid: true
        }
      )
    });
    this.store.dispatch(new FlatActions.ActualFlatUpdated(flat));
    

  }
}
