import {PayloadInterface} from "../common/PayloadInterface";
import {Restaurant} from "@restaurant/Restaurant";

export interface Category {
  id_category: number;
  label: String;
  img: String;
  restaurants: Restaurant[];

}





