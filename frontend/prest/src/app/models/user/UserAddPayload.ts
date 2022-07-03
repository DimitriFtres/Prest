import {Payload} from "../common/Payload";
import {Commentary} from "@commentary/Commentary";
import {UserRestaurant} from "@userRestaurant/UserRestaurant";
import {Address} from "@address/Address";
import {Credential} from "../../security/model";

export interface UserAddPayload extends Payload
{
  nickname: string;
  commentaries: Commentary[];
  userRestaurants: UserRestaurant[];
  addresses: Address[];
  credential: Credential;
}
