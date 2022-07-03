import {Payload} from "../common/Payload";
import {Restaurant} from "@restaurant/Restaurant";
import {User} from "@user/User";

export interface NewsRestaurantUpdatePayload extends Payload
{
  id_news_restaurant: number;
  text: string;
  restaurant: Restaurant;
  user: User;
  date: Date;
}
