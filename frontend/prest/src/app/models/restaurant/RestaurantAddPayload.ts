import {Payload} from "../common/Payload";
import {UserRestaurant} from "@userRestaurant/UserRestaurant";
import {Category} from "@category/Category";
import {Address} from "@address/Address";

export interface RestaurantAddPayload extends Payload
{
  label: string;
  description: string;
  menu: String;
  categories: Category[];
  actif: boolean;
  address: Address;
  image: String;
  userRestaurants: UserRestaurant[];
}
