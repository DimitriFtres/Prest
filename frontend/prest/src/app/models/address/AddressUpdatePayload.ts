import {Payload} from "../common/Payload";

export interface AddressUpdatePayload extends Payload
{
  id_address: number;
  country: String;
  town: String;
  zip: String;
  road: String;
  roadNumber: number;
  roadBox: String;
}
