import {Payload} from "../common/Payload";
import {Restaurant} from "@restaurant/Restaurant";

export interface CategoryAddPayload extends Payload
{
  label: String;
  img: String;
  restaurants: Restaurant[];
}
