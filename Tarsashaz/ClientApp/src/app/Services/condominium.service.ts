import { Injectable, Inject } from '@angular/core';
import { Condominium } from '../Models/condominium.model';
import { BillType } from '../Enums/BillType';
import { Role } from '../Enums/Role';
import { Observable, of as observableOf } from 'rxjs';
import { Range } from '../Enums/Range';
import { Priority } from '../Enums/Priority';
import { AppState } from '../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import {selectConCommonCharge } from '../Store/Selectors/condominium.selectors';
import { HttpClient } from '@angular/common/http';
import { Problem } from '../Models/problem.model';
import { Flat } from '../Models/flat.model';

@Injectable()
export class CondominiumService {

  baseUrl: string;

  constructor(private store: Store<AppState>,
    private http: HttpClient,
    @Inject('BASE_URL') baseurl: string) {
    this.baseUrl = baseurl
  }

  getCondominiumList(): Observable<Condominium[]> {
    let url = this.baseUrl + "condominium/all";
    return this.http.get<Condominium[]>(url);
  }


  getCondominiumByFlatId(flatid: number): Observable<Condominium>{
    let url = this.baseUrl + "condominium/" + flatid;
    return this.http.get<Condominium>(url);
  }

  getCondominiumByCrId(crId: number): Observable<Condominium> {
    let url = this.baseUrl + "condominium/common/" + crId;
    return this.http.get<Condominium>(url);
  }

  getCommonCharge(): number {
    let condominium$ = this.store.pipe(select(selectConCommonCharge));
    let commonCharge: number;
    condominium$.subscribe(c => commonCharge = c);
    return commonCharge;
  }

}
