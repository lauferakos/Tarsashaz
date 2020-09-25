import { Condominium } from "../../Models/condominium.model";
import { Bill } from "../../Models/bill.model";
import { Flat } from "../../Models/flat.model";
import { Address } from "../../Models/address.model";

export interface CondominiumState {
  bills: Bill[];
  flats: Flat[];
  id: number;
  crId: number;
  address: Address;
  commonCharge: number;
}

export const initialConState: CondominiumState = {
  bills: [],
  flats: [],
  id: null,
  crId: null,
  address: null,
  commonCharge:null,
}
