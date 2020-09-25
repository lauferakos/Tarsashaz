import { AppState } from "../States/app.state";
import { createSelector } from "@ngrx/store";
import { UserState } from "../States/user.state";

const selectUser = (state: AppState) => state.user;

export const selectActualUser = createSelector(
  selectUser,
  (state: UserState) => state.actualUser
);

