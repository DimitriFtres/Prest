import {Payload} from "../common/Payload";
import {Restaurant} from "@restaurant/Restaurant";
import {User} from "@user/User";

export interface CommentaryUpdatePayload extends Payload
{
  id_commentary: number;
  note: number;
  text: string;
  restaurant: Restaurant;
  user: User;
  date: Date;
  actif: boolean;

}
