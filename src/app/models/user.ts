import {Role} from './role';

export class User {
  id: number;
  email: string;
  password: string;
  token: string;
  tokenType: string;
  userRoles: Role;
}
