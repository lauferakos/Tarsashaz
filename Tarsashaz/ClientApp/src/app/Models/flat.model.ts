import { Address } from "./address.model";
import { User } from "./user.model";
import { Bill } from "./bill.model";
import { FlatData } from "./flatdata.model";

export interface Flat {
  id: number;
  address: Address;
  ownerId: number;
  bills: Bill[];
  flatDatas: FlatData[];
}
