import { initialConState, CondominiumState } from "../States/condominium.state";
import * as Actions from './../Actions/condominium.actions'


export function condominiumReducers(state = initialConState, action: Actions.CondominiumActions): CondominiumState {
  switch (action.type) {
    case Actions.GET_CONDOMINIUMS_SUCCESS:
      console.log('GET_CONDOMINIUMS_SUCCESS')
      return {
        ...state,
        condominiums: action.payload
      }
    case Actions.GET_CONDOMINIUM_SUCCESS:
      console.log('GET_CONDOMINIUM_SUCCESS');
      return {
        ...state,
        id: action.payload.id,
        crId: action.payload.crId,
        commonCharge: action.payload.commonCharge,
        bills: action.payload.bills,
        flats: action.payload.flats,
        address: action.payload.address
      }
    case Actions.ACTUAL_CON_CHANGED:
      console.log('ACTUAL_CON_CHANGED_SUCCESS');
      return {
        ...state,
        id: action.payload.id,
        crId: action.payload.crId,
        commonCharge: action.payload.commonCharge,
        bills: action.payload.bills,
        flats: action.payload.flats,
        address: action.payload.address
      }
    default:
      return state;
  }
}
