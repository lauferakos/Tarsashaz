import { Injectable } from "@angular/core";
import { Effect,ofType,Actions} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "../States/app.state";
import { Router } from "@angular/router";
import { FlatAdded, FLAT_ADDED, FlatAddedSuccess, ActualFlatChanged, ACTUAL_FLAT_CHANGED, ActualFlatChangedSuccess, ActualFlatUpdated, ACTUAL_FLAT_UPDATED, ActualFlatUpdatedSuccess, GetFlats, GET_FLATS, GetFlatsSuccess } from "../Actions/flat.actions";
import { switchMap } from "rxjs/operators";
import { FlatService } from "../../Services/flat.service";
import { of } from 'rxjs';
import { Flat } from "../../Models/flat.model";

@Injectable()
export class FlatEffects {
  @Effect()
  getFlats$ = this.actions$.pipe(
    ofType<GetFlats>(GET_FLATS),
    switchMap((f: GetFlats) => this.flatService.getFlatsByUserId(f.payload)),
    switchMap((flats: Flat[]) => {
      return of(new GetFlatsSuccess(flats));
    })
  );

  @Effect()
  flatAdded$ = this.actions$.pipe(
    ofType<FlatAdded>(FLAT_ADDED),
    switchMap((f: FlatAdded) => this.flatService.addFlat(f.payload)),
    switchMap((flat: Flat) => {
      if (flat != null) {
        return of(new FlatAddedSuccess(flat));
      }
    }
    ));

  @Effect()
  actualFlatChanged$ = this.actions$.pipe(
    ofType<ActualFlatChanged>(ACTUAL_FLAT_CHANGED),
    switchMap((a: ActualFlatChanged) => this.flatService.getFlatById(a.payload)),
    switchMap((f: Flat) => {
      if (f != null) {
        return of(new ActualFlatChangedSuccess(f));
      }
    }
    ));

  @Effect()
  actualFlatUpdated$ = this.actions$.pipe(
    ofType<ActualFlatUpdated>(ACTUAL_FLAT_UPDATED),
    switchMap((a: ActualFlatUpdated) => this.flatService.updateActualFlat(a.payload)),
    switchMap((f: Flat) => {
      if (f != null) {
        console.log('Actual Flat updated:', f);
        return of(new ActualFlatUpdatedSuccess(f));
      }
    })
  );

    constructor(private store: Store < AppState >, private actions$: Actions,private flatService:FlatService, private router: Router) {
}
}
