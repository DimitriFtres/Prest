import {Dto} from "../common/Dto";
import {Commentary} from "@commentary/Commentary";
import {UserRestaurant} from "@userRestaurant/UserRestaurant";
import {Address} from "@address/Address";

export interface UserDto extends Dto
{
  id_user: number;
  nickname: string;
  commentaries: Commentary[];
  userRestaurants: UserRestaurant[];
  addresses: Address[];
}

