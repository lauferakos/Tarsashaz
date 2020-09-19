import { BillType } from "../Enums/BillType";

export interface FlatBalance {
  type: BillType;
  amount: number;
}
