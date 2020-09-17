export interface DishInterface {
  id_dish: number;
  name: string;
  price: string;
}


export class Dish implements DishInterface{
  id_dish: number;
  name: string;
  price: string;
}
