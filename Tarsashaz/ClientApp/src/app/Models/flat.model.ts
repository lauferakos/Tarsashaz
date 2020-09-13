import { Address } from "./address.model";
import { User } from "./user.model";

export interface Flat {
  id: number;
  address: Address;
  ownerId: number;
}
