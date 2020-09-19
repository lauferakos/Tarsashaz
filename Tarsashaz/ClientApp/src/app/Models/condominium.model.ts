import { Flat } from "./flat.model";
import { Bill } from "./bill.model";
import { Address } from "./address.model";

export interface Condominium {
  id: number;
  crId: number;
  address: Address;
  flats: Flat[];
  bills: Bill[];
  commonCharge: number;
}
