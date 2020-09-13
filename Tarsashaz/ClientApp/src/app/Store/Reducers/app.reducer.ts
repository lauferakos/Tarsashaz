import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../States/app.state";
import { userReducers } from "./user.reducer";
import { flatReducers } from "./flat.reducer";

export const appReducers: ActionReducerMap<AppState, any> = {
  user: userReducers,
  flat: flatReducers
}
