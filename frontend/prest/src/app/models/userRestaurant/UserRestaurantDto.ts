import {Dto} from "../common/Dto";
import {Restaurant} from "@restaurant/Restaurant";
import {User} from "@user/User";

export interface UserRestaurantDto extends Dto
{
  id: number;
  role: string;
  user: User;
  restaurant: Restaurant;
}

