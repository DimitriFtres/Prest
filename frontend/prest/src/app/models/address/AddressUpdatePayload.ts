import {Payload} from "../common/Payload";

export interface AddressUpdatePayload extends Payload
{
  id_address: number;
  country: string;
  town: string;
  zip: string;
  road: string;
  roadNumber: number;
  roadBox: string;
}
