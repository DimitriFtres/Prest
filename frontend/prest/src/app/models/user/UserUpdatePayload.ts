import {Payload} from "../common/Payload";
import {Commentary} from "@commentary/Commentary";
import {UserRestaurant} from "@userRestaurant/UserRestaurant";
import {Address} from "@address/Address";

export interface UserUpdatePayload extends Payload
{
  id_user: number;
  nickname: string;
  addresses: Address[];
}
