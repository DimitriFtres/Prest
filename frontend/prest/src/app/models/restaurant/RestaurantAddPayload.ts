import {Payload} from "../common/Payload";
import {UserRestaurant} from "@userRestaurant/UserRestaurant";
import {Category} from "@category/Category";
import {Address} from "@address/Address";

export interface RestaurantAddPayload extends Payload
{
  label: string;
  description: string;
  menu: string;
  categories: Category[];
  actif: boolean;
  userRestaurants: UserRestaurant[];
  address: Address;
  image: string;
}
