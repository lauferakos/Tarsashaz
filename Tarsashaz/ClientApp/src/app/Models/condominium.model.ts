import { Flat } from "./flat.model";
import { Bill } from "./bill.model";
import { Address } from "./address.model";
import { BillData } from "./billdata.model";
import { Announcement } from "./announcement.model";
import { Problem } from "./problem.model";

export interface Condominium {
  id: number;
  crId: number;
  address: Address;
  flats: Flat[];
  bills: Bill[];
  commonCharge: number;
  announcements: Announcement[];
  problems: Problem[];
}
