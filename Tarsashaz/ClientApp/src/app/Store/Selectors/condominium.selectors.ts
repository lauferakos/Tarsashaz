import { AppState } from "../States/app.state";
import { createSelector } from "@ngrx/store";
import { CondominiumState } from "../States/condominium.state";

const selectCondominium = (state: AppState) => state.condominium;

export const selectConId = createSelector(
  selectCondominium,
  (state: CondominiumState) => state.id
);

export const selectConCrId = createSelector(
  selectCondominium,
  (state: CondominiumState) => state.crId
);

export const selectConBills = createSelector(
  selectCondominium,
  (state: CondominiumState) => state.bills
);

export const selectConFlats = createSelector(
  selectCondominium,
  (state: CondominiumState) => state.flats
);

export const selectConAddress = createSelector(
  selectCondominium,
  (state: CondominiumState) => state.address
);

export const selectConCommonCharge = createSelector(
  selectCondominium,
  (state: CondominiumState) => state.commonCharge
);

export const selectCondominiums = createSelector(
  selectCondominium,
  (state: CondominiumState) => state.condominiums
);
