import {Payload} from "../common/Payload";
import {Restaurant} from "@restaurant/Restaurant";
import {User} from "@user/User";

export interface UserRestaurantAddPayload extends Payload
{
  role: String;
  id_user: User;
  id_restaurant: Restaurant;
}
