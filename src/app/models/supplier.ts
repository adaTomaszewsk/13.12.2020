export interface SupplierInterface {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
}

export class Supplier implements SupplierInterface {
  name: string;
  surname: string;
  email: string;
  password: string;
  id: number;
}
