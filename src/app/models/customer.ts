export interface CustomerInterface {
  id_customer: number;
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
  phoneNumber: string;
  id_customer: number;
}
