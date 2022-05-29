import {PayloadInterface} from "../common/PayloadInterface";
import {UserRestaurant} from "@userRestaurant/UserRestaurant";
import {Category} from "@category/Category";
import {Address} from "@address/Address";

export interface Restaurant {
  id_restaurant: number;
  label: String;
  description: String;
  menu: String;
  categories: Category[];
  actif: boolean;
  userRestaurants: UserRestaurant[];
  address: Address;
  image: String;
}
