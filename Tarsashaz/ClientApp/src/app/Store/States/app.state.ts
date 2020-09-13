import { User } from './../../Models/user.model';
import { UserState, initialUserState } from './user.state';
import { FlatState, initialFlatState } from './flat.state';

export interface AppState {
  user: UserState;
  flat: FlatState;
}

export const initialAppState: AppState ={
  user: initialUserState,
  flat: initialFlatState
}

export function getInitialState(): AppState{
  return initialAppState;
}
