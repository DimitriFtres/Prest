import {Payload} from "../common/Payload";

export interface AddressAddPayload extends Payload
{
  country: string;
  town: string;
  zip: string;
  road: string;
  roadNumber: number;
  roadBox: string;
}
