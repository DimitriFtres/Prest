import {Payload} from "../common/Payload";
import {Commentary} from "@commentary/Commentary";
import {UserRestaurant} from "@userRestaurant/UserRestaurant";
import {Address} from "@address/Address";
import {Credential} from "../../security/model";

export interface UserAddPayload extends Payload
{
  nickname: string;
  addresses: Address[];
  credential: Credential;
}
