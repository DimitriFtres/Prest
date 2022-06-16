import {PayloadInterface} from "../common/PayloadInterface";

export interface Address {
  id_address: number;
  country: string;
  town: string;
  zip: string;
  road: string;
  roadNumber: number;
  roadBox: string;
}
