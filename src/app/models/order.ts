import {Dish} from './dish';
import {Supplier} from './supplier';
import {Customer} from './customer';

export class Order{
  id: number;
  date: string;
  status: string;
  dish: Dish[];
  supplier: Supplier;
  customer: Customer;
}


