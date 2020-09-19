import { FlatState, initialFlatState } from "../States/flat.state";
import * as Actions from './../Actions/flat.actions'

export function flatReducers(state = initialFlatState, action: Actions.FlatActions): FlatState {
  switch (action.type) {
    case Actions.FLAT_ADDED_SUCCESS:
      console.log('FLAT_ADDED_SUCCESS');
      return {
        ...state,
        flats: state.flats.concat(action.payload),
        actualFlat: action.payload
      }
    case Actions.ACTUAL_FLAT_CHANGED_SUCCESS:
      console.log('ACTUAL_FLAT_CHANGED_SUCCESS');
      return {
        ...state,
        actualFlat: action.payload
      }
    case Actions.ACTUAL_FLAT_UPDATED_SUCCESS:
      console.log('ACTUAL_FLAT_UPDATED_SUCCESS');
      return {
        ...state,
        flats: state.flats.filter(f => f.id != action.payload.id).concat(action.payload),
        actualFlat: action.payload
      }
    default:
      return state;
  }
}
