import {PayloadInterface} from "../common/PayloadInterface";
import {Restaurant} from "@restaurant/Restaurant";
import {User} from "@user/User";

export interface NewsRestaurant {
  id_news_restaurant: number;
  text: string;
  restaurant: Restaurant;
  user: User;
  date: Date;
}
