import { Address } from "./address.model";
import { User } from "./user.model";

export interface Flat {
  address: Address;
  owner: User;
}
