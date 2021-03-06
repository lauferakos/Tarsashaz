import { Injectable, Inject } from '@angular/core';
import { Flat } from '../Models/flat.model';
import { Observable, of as observableOf } from 'rxjs';
import { AppState } from '../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectFlats, selectActualFlat, selectActualFlatBalance } from '../Store/Selectors/flat.selectors';
import { selectActualUser } from '../Store/Selectors/user.selectors';
import { User } from '../Models/user.model';
import { Bill } from '../Models/bill.model';
import { BillType } from '../Enums/BillType';
import * as FlatActions from '../Store/Actions/flat.actions';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { FlatData } from '../Models/flatdata.model';
import { concat } from 'rxjs/operators';
import { Picture } from '../Models/picture.model';
import { FlatBalance } from '../Models/flatbalance.model';

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
    let url = this.baseUrl + "user/flats/" + userId;
    return this.http.get<Flat[]>(url);
  
  }

  getFlatById(id: number): Observable<Flat> {
    let flats$ = this.store.pipe(select(selectFlats));
    let result: Flat;
    flats$.subscribe((flats) => result = flats.filter(f => f.id == id)[0]);
    return observableOf(result);
  }

   uploadData(data: FlatData, flatid: number): Observable<FlatData>{
    let url = this.baseUrl + "flatdata/" + flatid;    
   console.log('Uploading data...');
    return this.http.post<FlatData>(url, data);
  }


   uploadPicture(pictures: Picture[]) {
    let url = this.baseUrl + "flatpicture/upload"
    const formData = new FormData();
    for (let picture of pictures) {
      formData.append('files', picture.file);
    }

    console.log(formData.get('files'));
     return this.http.request(new HttpRequest(
       'POST',
       url,
       formData,
       {
         reportProgress: true
       }));
  }

  updateActualFlat(f: Flat): Observable<Flat> {
    let url = this.baseUrl + "flat/" + f.id;
    return this.http.put<Flat>(url,f);
  }
  private getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
  addBill(bill: Bill): Observable<Bill> {
    console.log(bill);
    let url = this.baseUrl + "flatbill/new";
    return this.http.post<Bill>(url, bill);
  }


  addFlatBalance(flatId: number, balance: FlatBalance): Observable<FlatBalance> {
    let url = this.baseUrl + "flatbalance/" + flatId;
    return this.http.post<FlatBalance>(url, balance);
  }

  updateFlatbalance(balanceId: number, balance: FlatBalance) {
    let url = this.baseUrl + "flatbalance/" + balanceId;
    return this.http.put<FlatBalance>(url, balance);
  }

  getFlatsInCondominium(conId: number): Observable<Flat[]> {
    let url = this.baseUrl + "flat/flats/" + conId;
    return this.http.get<Flat[]>(url);
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
    //this.store.dispatch(new FlatActions.ActualFlatUpdated(flat));
    console.log(bill);
    return this.addBill(bill);
    
  }
}
