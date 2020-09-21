export interface CustomerInterface {
  id_customer: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  phone_number: string;

}

export class Customer implements CustomerInterface {
  name: string;
  surname: string;
  email: string;
  password: string;
  id_customer: number;
  phone_number: string;
}
