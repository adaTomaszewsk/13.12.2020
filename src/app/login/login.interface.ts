import {Role} from '../models/role';

export interface LoginInterface {
  // role: Role;
  // id: number;
  // token: string;
  // userRoles: string;
  // tokenType: string;

  id: number;
  email: string;
  password: string;
  token: string;
  tokenType: string;
  name: string;
  surname: string;
  userRoles: Role;
}
