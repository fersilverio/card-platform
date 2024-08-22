import { UserRole } from "../enums/UserRole";

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



