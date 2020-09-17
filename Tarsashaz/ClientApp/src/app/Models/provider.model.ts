import { Address } from "./address.model";

export interface Provider {
  address: Address;
  phone: string;
  email: string;
  accountNum: number;
}
