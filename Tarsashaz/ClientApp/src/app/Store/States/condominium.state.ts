import { Condominium } from "../../Models/condominium.model";
import { Bill } from "../../Models/bill.model";
import { Flat } from "../../Models/flat.model";
import { Address } from "../../Models/address.model";
import { Problem } from "../../Models/problem.model";

export interface CondominiumState {
  bills: Bill[];
  flats: Flat[];
  id: number;
  crId: number;
  address: Address;
  commonCharge: number;
  condominiums: Condominium[];
}

export const initialConState: CondominiumState = {
  bills: [],
  flats: [],
  id: null,
  crId: null,
  address: null,
  commonCharge: null,
  condominiums: [],
}
