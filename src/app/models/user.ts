import {Role} from './role';

export class User {
  id: number;
  email: string;
  password: string;
  token: string;
  tokenType: string;
  // name: string;
  // surname: string;
  userRoles: Role;
  // userRoles: [];
  // accountNonExpired;
  //
  // accountNonLocked: boolean;
  //
  // credentialsNonExpired: boolean;
  //
  // enabled: boolean;
}
