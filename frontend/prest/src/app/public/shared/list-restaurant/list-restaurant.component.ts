import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "@service/restaurant/restaurant.service";
import {Restaurant} from "@restaurant/Restaurant";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "@category/Category";

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.scss']
})
export class ListRestaurantComponent implements OnInit {
  restaurants?: Restaurant[];
  restaurantFiltered?: Restaurant[];
  label: string = "";
  city: string = "";
  category: Category = {} as Category;

  constructor(public restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getList().subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }
  labelChange(event: any) {
    this.label = event.target.value;

    if(this.restaurants)
    {
      this.restaurants.filter((restaurant) => {
         return this.addRestaurantFiltered(restaurant, this.label, this.category, this.city);
      });
    }

  }
  categoryChange(category: Category) {
    this.category = category;

    if(this.restaurants)
    {
      this.restaurants.filter((restaurant) => {
        return this.addRestaurantFiltered(restaurant, this.label, this.category, this.city);
      });
    }
  }
  cityChange(event: any) {
    this.city = event.target.value;

    if(this.restaurants)
    {
      this.restaurants.filter((restaurant) => {
        return this.addRestaurantFiltered(restaurant, this.label, this.category, this.city);
      });
    }
  }

  addRestaurantFiltered(restaurant: Restaurant, label: string, category: Category, city: string) : boolean{
    if(restaurant.label.includes(label) && restaurant.address.town.includes(city))
    {
      if(category == null)
      {
        return true;
      }
      else
      {
        if(restaurant.categories.includes(category)){
          return true;
        }
        return false;
      }
    }
    return false;
  }
}
