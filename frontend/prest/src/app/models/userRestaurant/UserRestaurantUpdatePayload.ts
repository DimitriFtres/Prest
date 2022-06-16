import {Payload} from "../common/Payload";
import {Restaurant} from "@restaurant/Restaurant";
import {User} from "@user/User";

export interface UserRestaurantUpdatePayload extends Payload
{
  id: number;
  role: string;
  id_user: User;
  id_restaurant: Restaurant;
}
