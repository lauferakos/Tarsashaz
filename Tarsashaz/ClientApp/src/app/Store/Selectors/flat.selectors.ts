import { AppState } from "../States/app.state";
import { createSelector } from "@ngrx/store";
import { FlatState } from "../States/flat.state";

const selectFlat = (state: AppState) => state.flat;

export const selectFlats = createSelector(
  selectFlat,
  (state: FlatState) => state.flats
);

export const selectActualFlat = createSelector(
  selectFlat,
  (state: FlatState) => state.actualFlat
);

export const selectActualFlatDatas = createSelector(
  selectFlat,
  (state: FlatState) => state.actualFlat.flatDatas
);

export const selectActualFlatBalance = createSelector(
  selectFlat,
  (state: FlatState) => state.actualFlat.balances
);

export const selectActualFlatBills = createSelector(
  selectFlat,
  (state: FlatState) => state.actualFlat.bills);
