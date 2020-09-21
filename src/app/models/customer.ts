export interface CustomerInterface {
  idCustomer: number;
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
  idCustomer: number;
  phoneNumber: string;
}
