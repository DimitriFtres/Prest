import {Payload} from "../common/Payload";
import {Restaurant} from "@restaurant/Restaurant";

export interface CategoryUpdatePayload extends Payload
{
  id_category: number;
  label: string;
  img: string;
}
