import { BillType } from "../Enums/BillType";

export interface BillData {
  type: BillType;
  start: Date;
  end: Date;
  amounts: number[];
}
