export interface DishInterface {
  id: number;
  name: string;
  price: string;
}


export class Dish implements DishInterface{
  id: number;
  name: string;
  price: string;
}
