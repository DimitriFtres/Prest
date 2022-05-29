import {Payload} from "../common/Payload";

export interface AddressAddPayload extends Payload
{
  country: String;
  town: String;
  zip: String;
  road: String;
  roadNumber: number;
  roadBox: String;
}
