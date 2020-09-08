import { User } from "../Models/user.model";
import { Platform } from "../Enums/Platform";

export interface UserState {
  readonly actualUser: User;
  readonly firstLogin: boolean;
  readonly provider: Platform.Google | Platform.Facebook;
}


export const initialUserState: UserState = {
  actualUser: null,
  firstLogin: true,
  provider: Platform.Google
}
