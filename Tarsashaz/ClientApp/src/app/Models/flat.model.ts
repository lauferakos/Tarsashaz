import { Address } from "./address.model";
import { User } from "./user.model";
import { Bill } from "./bill.model";
import { FlatData } from "./flatdata.model";
import { FlatBalance } from "./flatbalance.model";

export interface Flat {
  id: number;
  address: Address;
  userId: number;
  bills: Bill[];
  flatDatas: FlatData[];
  balances: FlatBalance[];
}
