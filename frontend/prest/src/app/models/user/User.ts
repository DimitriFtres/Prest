import {Address} from "@address/Address";

export interface User {
  id_user: number;
  nickname: string;
  addresses: Address[];
}
