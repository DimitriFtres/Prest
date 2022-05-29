import {Dto} from "../common/Dto";
import {Restaurant} from "@restaurant/Restaurant";

export interface CategoryDto extends Dto
{
  id_category: number;
  label: String;
  img: String;
  restaurants: Restaurant[];
}

