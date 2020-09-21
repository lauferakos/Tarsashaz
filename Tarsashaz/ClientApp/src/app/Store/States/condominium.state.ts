import { Condominium } from "../../Models/condominium.model";

export interface CondominiumState {
  actualCon: Condominium;
}

export const initialConState: CondominiumState = {
  actualCon: null
}
