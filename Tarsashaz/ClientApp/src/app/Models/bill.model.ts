import { BillType } from "../Enums/BillType";
import { Provider } from "./provider.model";
import { BillDate } from "./billdate.model";
import { Picture } from "./picture.model";
import { Item } from "./item.model";
import { User } from "./user.model";
import { Address } from "./address.model";

export interface Bill {
  id: number;
  type: BillType;
  pic: Picture;
  user: User;
  provider: Provider;
  billDate: BillDate;
  amount: number;
  items: Item[];
  destAddress: Address;
  isPaid: boolean;
}
