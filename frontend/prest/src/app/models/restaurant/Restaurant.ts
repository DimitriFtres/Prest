import {PayloadInterface} from "../common/PayloadInterface";
import {UserRestaurant} from "@userRestaurant/UserRestaurant";
import {Category} from "@category/Category";
import {Address} from "@address/Address";

export interface Restaurant {
  id_restaurant: number;
  label: string;
  description: string;
  menu: string;
  categories: Category[];
  actif: boolean;
  address: Address;
  image: string;
}
