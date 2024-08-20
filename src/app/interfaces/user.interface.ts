import { UserRole } from "../shared/enums/UserRole";

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IUserRegistry {
  name: string;
  nickName: string;
  email: string;
  password: string;
  role: UserRole;
}



