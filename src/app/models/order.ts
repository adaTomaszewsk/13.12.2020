import {Dish} from './dish';
import {LoggedUser} from './loggedUser';

export class Order{
  id_Order: number;
  date: string;
  status: string;
  dish: Dish[];
  loggedUser: LoggedUser;
}
