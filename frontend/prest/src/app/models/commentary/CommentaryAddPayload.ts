import {Payload} from "../common/Payload";
import {Restaurant} from "@restaurant/Restaurant";
import {User} from "@user/User";

export interface CommentaryAddPayload extends Payload
{
  note: String;
  text: String;
  restaurant: Restaurant;
  user: User;
  date: Date;
}
