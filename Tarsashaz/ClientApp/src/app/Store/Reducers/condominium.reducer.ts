import { initialConState, CondominiumState } from "../States/condominium.state";
import * as Actions from './../Actions/condominium.actions'

export function condominiumReducers(state = initialConState, action: Actions.CondominiumActions): CondominiumState {
  switch (action.type) {
    case Actions.GET_CONDOMINIUM_SUCCESS:
      console.log('GET_CONDOMINIUM_SUCCESS');
      return {
        ...state,
        actualCon: action.payload
      }
    default:
      return state;
  }
}
