import {Dto} from "../common/Dto";
import {Restaurant} from "@restaurant/Restaurant";
import {User} from "@user/User";

export interface NewsRestaurantDto extends Dto
{
  id_news_restaurant: number;
  text: string;
  restaurant: Restaurant;
  user: User;
  date: Date;
}

