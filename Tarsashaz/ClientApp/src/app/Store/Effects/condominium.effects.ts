import { Injectable } from "@angular/core";
import { AppState } from "../States/app.state";
import { Store } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { CondominiumService } from "../../Services/condominium.service";
import { GET_CONDOMINIUM, GetCondominium, GetCondominiumSuccess } from "../Actions/condominium.actions";
import { switchMap } from "rxjs/operators";
import { Condominium } from "../../Models/condominium.model";
import { of } from "rxjs";

@Injectable()
export class CondominiumEffects {
  @Effect()
  getCondominium$ = this.actions$.pipe(
    ofType<GetCondominium>(GET_CONDOMINIUM),
    switchMap((c: GetCondominium) => this.conService.getCondominiumByUserId(c.payload)),
    switchMap((conn: Condominium) => {
      if (conn) {
        return of(new GetCondominiumSuccess(conn));
      }
    })
  );

    constructor(private store: Store<AppState>, private actions$: Actions, private conService: CondominiumService) {
    }

  
}
