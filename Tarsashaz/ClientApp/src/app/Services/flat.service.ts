import { Injectable } from '@angular/core';
import { Flat } from '../Models/flat.model';
import { Observable, of as observableOf } from 'rxjs';
import { AppState } from '../Store/States/app.state';
import { Store, select } from '@ngrx/store';
import { selectFlats } from '../Store/Selectors/flat.selectors';

@Injectable()
export class FlatService {
  constructor(private store: Store<AppState>) {

  }

  addFlat(f: Flat): Observable<Flat>{
    console.log('Addflat',f);
    
    return observableOf(f);
  }

  getFlatById(id: number): Observable<Flat> {
    let flats$ = this.store.pipe(select(selectFlats));
    let result: Flat;
    flats$.subscribe((flats) => result = flats.find(f => f.id == id));
    return observableOf(result);
  }
}
