import { Role } from "../Enums/Role";
import { Flat } from "./flat.model";

export interface User {
  name: string;
  id: number;
  email: string;
  token: string;
  role: Role.cr | Role.resident;
  phone: string;
  flats: Flat[];
}
