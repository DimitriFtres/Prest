import {Dto} from "../common/Dto";
import {Restaurant} from "@restaurant/Restaurant";
import {User} from "@user/User";

export interface CommentaryDto extends Dto
{
  id_commentary: number;
  note: number;
  text: String;
  restaurant: Restaurant;
  user: User;
  date: Date;
}

