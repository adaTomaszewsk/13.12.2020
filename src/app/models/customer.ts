export interface CustomerInterface {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  phoneNumber: string;

}

export class Customer implements CustomerInterface {
  name: string;
  surname: string;
  email: string;
  password: string;
  id: number;
  phoneNumber: string;
}
