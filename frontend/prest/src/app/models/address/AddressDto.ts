import {Dto} from "../common/Dto";

export interface AddressDto extends Dto
{
  id_address: number;
  country: string;
  town: string;
  zip: string;
  road: string;
  roadNumber: number;
  roadBox: string;
}

