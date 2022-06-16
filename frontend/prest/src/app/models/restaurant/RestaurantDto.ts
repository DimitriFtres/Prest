import {Dto} from "../common/Dto";
import {UserRestaurant} from "@userRestaurant/UserRestaurant";
import {Category} from "@category/Category";
import {Address} from "@address/Address";

export interface RestaurantDto extends Dto
{
  id_restaurant: number;
  label: string;
  description: string;
  menu: string;
  categories: Category[];
  actif: boolean;
  userRestaurants: UserRestaurant[];
  address: Address;
  image: string;
}

