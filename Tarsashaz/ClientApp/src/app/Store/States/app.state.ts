import { User } from './../../Models/user.model';
import { UserState, initialUserState } from './user.state';
import { FlatState, initialFlatState } from './flat.state';

import { AnnouncementState, initialAnnouncementState } from './announcement.state';
import { CondominiumState, initialConState } from './condominium.state';

export interface AppState {
  user: UserState;
  flat: FlatState;
  announcement: AnnouncementState;
  condominium: CondominiumState
}

export const initialAppState: AppState ={
  user: initialUserState,
  flat: initialFlatState,
  announcement: initialAnnouncementState,
  condominium: initialConState
}

export function getInitialState(): AppState{
  return initialAppState;
}
