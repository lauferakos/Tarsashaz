import { Role } from "../Enums/Role";

export interface User {
  name: string;
  id: string;
  email: string;
  token: string;
  role: Role.cr | Role.resident;
}
