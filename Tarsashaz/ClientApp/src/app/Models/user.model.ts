import { Role } from "../Enums/Role";

export interface User {
  name: string;
  id: number;
  email: string;
  token: string;
  role: Role.cr | Role.resident;
  phone: string;
}
