import {PayloadInterface} from "@common/PayloadInterface";

export interface SignupPayload extends PayloadInterface {
  email: string;
  password: string;
}
