import {Dto} from "../common/Dto";

export interface AddressDto extends Dto
{
  id_address: number;
  country: String;
  town: String;
  zip: String;
  road: String;
  roadNumber: number;
  roadBox: String;
}

