import { User } from './../../Models/user.model';
import { UserState, initialUserState } from './user.state';
import { FlatState, initialFlatState } from './flat.state';

import { AnnouncementState, initialAnnouncementState } from './announcement.state';
import { CondominiumState, initialConState } from './condominium.state';

export interface AppState {
  user: UserState; //Belépett User
  flat: FlatState; // Belépett user lakásai +aktuális
  announcement: AnnouncementState; //Aktuális lakás hirdetményei
  condominium: CondominiumState //Aktuális lakáshoz tartozó társasház
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
