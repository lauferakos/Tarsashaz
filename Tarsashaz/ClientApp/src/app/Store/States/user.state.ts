import { User } from "../../Models/user.model";
import { Platform } from "../../Enums/Platform";

export interface UserState {
  readonly actualUser: User;
}


export const initialUserState: UserState = {
  actualUser: null,
}
