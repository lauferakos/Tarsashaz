import { AppState } from "../States/app.state";
import { createSelector } from "@ngrx/store";
import { CondominiumState } from "../States/condominium.state";

const selectCondominium = (state: AppState) => state.condominium;

export const selectConId = createSelector(
  selectCondominium,
  (state: CondominiumState) => {
    if (state && state.id)
      return state.id;
  }
);

export const selectConCrId = createSelector(
  selectCondominium,
  (state: CondominiumState) => {
    if (state && state.crId)
      return state.crId;
  }
);

export const selectConBills = createSelector(
  selectCondominium,
  (state: CondominiumState) => {
    if (state && state.bills)
      return state.bills;
  }
);

export const selectConFlats = createSelector(
  selectCondominium,
  (state: CondominiumState) => {
    if (state && state.flats)
      return state.flats;
  }
);

export const selectConAddress = createSelector(
  selectCondominium,
  (state: CondominiumState) => {
    if (state && state.address)
      return state.address;
  }
);

export const selectConCommonCharge = createSelector(
  selectCondominium,
  (state: CondominiumState) => {
    if (state && state.commonCharge)
      return state.commonCharge;
  }
);

export const selectCondominiums = createSelector(
  selectCondominium,
  (state: CondominiumState) => {
    if (state && state.condominiums)
      return state.condominiums;
  }
);
