import { Injectable, Inject } from '@angular/core';
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
import { HttpClient } from '@angular/common/http';
import { FlatData } from '../Models/flatdata.model';
import { concat } from 'rxjs/operators';

@Injectable()
export class FlatService {
  baseUrl: string;
  constructor(private store: Store<AppState>, private http: HttpClient, @Inject('BASE_URL') baseurl: string) {
    this.baseUrl = baseurl;
  }

  addFlat(f: Flat): Observable<Flat>{
    let url = this.baseUrl + "flat";
    return this.http.post<Flat>(url, f);
  }
  getFlatsByUserId(userId: number): Observable<Flat[]> {
    let actualUser$ = this.store.pipe(select(selectActualUser));
    let flats: Flat[]=
    [
      {
        id: 1,
        userId: 5,
        address: {
          id:1,
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
        userId: 5,
        address: {
          id:2,
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

  uploadData(data: FlatData, flatid: number): Observable<FlatData>{
    let url = this.baseUrl + "flatdata/" + flatid;
    return this.http.post<FlatData>(url, data);
  }

  updateActualFlat(f: Flat): Observable<Flat> {
    let url = this.baseUrl + "flat/" + f.id;
    return this.http.put<Flat>(url,f);
  }
  private getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
  addBills(amount: number): Observable<Bill[]> {
    let actualUser$ = this.store.pipe(select(selectActualUser));
    let actualFlat$ = this.store.pipe(select(selectActualFlat));
    let user: User;
    let flat: Flat;
    let bills: Bill[] = [];
    let bill: Bill;
    actualUser$.subscribe(u => user = u);
    actualFlat$.subscribe(f => {
      for (let i = 0; i < amount; i++) {
        bill = {
          id: 0,
          type: this.getRandomInt(3) == 2 ? BillType.Water : this.getRandomInt(3) == 1 ? BillType.Electric : BillType.Heating,
          user: user,
          pic: null,
          provider: null,
          billDate: {
            startDate: new Date(),
            payoffEnd: new Date(),
            payoffStart: new Date(),
            deadline: new Date('2020-09-05')
          },
          amount: this.getRandomInt(5000)+5000,
          items: [],
          destAddress: f.address,
          destAddressId: f.address.id,
          userId: user.id,
          flatId: f.id,
          isPaid: false
        }
        
        bills = bills.concat(bill);
      }
      flat = {
        id: f.id,
        address: f.address,
        userId: f.userId,
        flatDatas: f.flatDatas,
        balances: f.balances,
        bills: bills
      }
      
    });
    console.log(flat);
    this.store.dispatch(new FlatActions.ActualFlatUpdated(flat));

    let url = this.baseUrl + "flatbill/addbills";
    return this.http.post<Bill[]>(url, bills);


  }
  addCommonChargeBillToActualFlat(amount: number):Observable<Bill> {
    let actualUser$ = this.store.pipe(select(selectActualUser));
    let actualFlat$ = this.store.pipe(select(selectActualFlat));
    let user : User;
    let flat: Flat;
    let bill: Bill;
    actualUser$.subscribe(u => user = u);
    actualFlat$.subscribe(f => {
      bill = {
        id: 0,
        type: BillType.CommonCharge,
        user: user,
        pic: null,
        provider: null,
        billDate: {
          startDate: new Date(),
          payoffEnd: new Date(),
          payoffStart: new Date(),
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
        destAddressId: f.address.id,
        userId: user.id,
        flatId: f.id,
        isPaid: true
      }
      flat = {
        id: f.id,
        address: f.address,
        userId: f.userId,
        flatDatas: f.flatDatas,
        balances: f.balances,
        bills: f.bills.concat(bill)
      }
    });
    this.store.dispatch(new FlatActions.ActualFlatUpdated(flat));

    let url = this.baseUrl + "flatbill";
    return this.http.post<Bill>(url, bill);

  }
}
