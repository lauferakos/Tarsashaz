import { AppState } from "../States/app.state";
import { createSelector } from "@ngrx/store";
import { CondominiumState } from "../States/condominium.state";

const selectCondominium = (state: AppState) => state.condominium;

export const selectActualCon = createSelector(
  selectCondominium,
  (state: CondominiumState) => state.actualCon
);
