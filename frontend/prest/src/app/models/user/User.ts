import {PayloadInterface} from "../common/PayloadInterface";
import {Commentary} from "@commentary/Commentary";
import {UserRestaurant} from "@userRestaurant/UserRestaurant";
import {Address} from "@address/Address";

export interface User {
  id_user: number;
  nickname: String;
  commentaries: Commentary[];
  userRestaurants: UserRestaurant[];
  addresses: Address[];
}
