import { Flat } from "../../Models/flat.model";

export interface FlatState {
  flats: Flat[];
  actualFlat: Flat;
}

export const initialFlatState: FlatState = {
  flats: [],
  actualFlat:null
}
