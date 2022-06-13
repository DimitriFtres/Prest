import {PayloadInterface} from "@common/PayloadInterface";

export interface SigninPayload extends PayloadInterface {
  email: string;
  password: string;
}
