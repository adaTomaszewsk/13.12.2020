import {Role} from '../models/role';

export interface LoginInterface {
  // role: Role;
  // id: number;
  // token: string;
  // userRoles: string;
  // tokenType: string;

  id: number;
  token: string;
  userRoles: [];
}
