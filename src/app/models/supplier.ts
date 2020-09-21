export interface SupplierInterface {
  idCupplier: number;
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
  idCupplier: number;
}
