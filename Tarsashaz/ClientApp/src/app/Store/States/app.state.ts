import { User } from './../../Models/user.model';
import { UserState, initialUserState } from './user.state';
import { FlatState, initialFlatState } from './flat.state';

import { AnnouncementState, initialAnnouncementState } from './announcement.state';

export interface AppState {
  user: UserState;
  flat: FlatState;
  announcement: AnnouncementState
}

export const initialAppState: AppState ={
  user: initialUserState,
  flat: initialFlatState,
  announcement: initialAnnouncementState
}

export function getInitialState(): AppState{
  return initialAppState;
}
