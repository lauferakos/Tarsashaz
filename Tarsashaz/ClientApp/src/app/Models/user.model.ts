import { Role } from "../Enums/Role";
import { Flat } from "./flat.model";

export interface User {
  id: number;
  name: string;
  email: string;
  token: string;
  role: Role.cr | Role.resident;
  phone: string;
  flats: Flat[];
}
