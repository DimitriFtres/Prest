import {PayloadInterface} from "../common/PayloadInterface";
import {Restaurant} from "@restaurant/Restaurant";
import {User} from "@user/User";

export interface UserRestaurant {
  id: number;
  role: String;
  id_user: User;
  id_restaurant: Restaurant;
}
