import { BillType } from "../Enums/BillType";

export interface FlatBalance {
  id: number;
  waterAmount: number;
  heatingAmount: number;
  electricalAmount: number;
  date: Date;
}
