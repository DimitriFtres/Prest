import {PayloadInterface} from "../common/PayloadInterface";
import {Restaurant} from "@restaurant/Restaurant";
import {User} from "@user/User";

export interface Commentary {
  id_commentary: number;
  note: number;
  text: string;
  restaurant: Restaurant;
  user: User;
  date: Date;
}
