import { AppState } from "../States/app.state";
import { createSelector, select } from "@ngrx/store";
import { UserState } from "../States/user.state";

const selectUser = (state: AppState) => state.user;

export const selectActualUser = createSelector(
  selectUser,
  (state: UserState) => {
    if (state && state.actualUser)
      return state.actualUser;
  }
);

export const selectUserBalance = createSelector(
  selectUser,
  (state: UserState) => {
    if (state && state.balance)
      return state.balance;
  }
);

