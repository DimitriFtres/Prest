import {Payload} from "../common/Payload";
import {Restaurant} from "@restaurant/Restaurant";
import {User} from "@user/User";

export interface NewsRestaurantAddPayload extends Payload
{
  text: string;
  restaurant: Restaurant;
  user: User;
  date: Date;
  actif: boolean;
}
