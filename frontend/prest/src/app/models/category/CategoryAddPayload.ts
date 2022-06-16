import {Payload} from "../common/Payload";
import {Restaurant} from "@restaurant/Restaurant";

export interface CategoryAddPayload extends Payload
{
  label: string;
  img: string;
  restaurants: Restaurant[];
}
