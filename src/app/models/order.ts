import {Dish} from './dish';
import {LoggedUser} from './loggedUser';

export class Order{
  id: number;
  date: string;
  status: string;
  dish: Dish[];
  loggedUser: LoggedUser;
}
