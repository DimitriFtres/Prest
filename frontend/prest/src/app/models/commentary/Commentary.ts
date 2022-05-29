import {PayloadInterface} from "../common/PayloadInterface";
import {Restaurant} from "@restaurant/Restaurant";
import {User} from "@user/User";

export interface Commentary {
  id_commentary: number;
  note: String;
  text: String;
  restaurant: Restaurant;
  user: User;
}
