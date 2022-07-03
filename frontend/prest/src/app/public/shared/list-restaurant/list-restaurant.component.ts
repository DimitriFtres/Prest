import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "@service/restaurant/restaurant.service";
import {Restaurant} from "@restaurant/Restaurant";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "@category/Category";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.scss']
})
export class ListRestaurantComponent implements OnInit {
  restaurants?: Restaurant[];
  restaurants$: BehaviorSubject<Restaurant[]> = new BehaviorSubject<Restaurant[]>([]);
  restaurantFiltered?: Restaurant[];
  label: string = "";
  city: string = "";
  category: Category = {} as Category;

  constructor(public restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getList().subscribe(restaurants => {
      this.restaurants = restaurants;
      this.restaurants$.next(restaurants);
    });
  }
  labelChange(event: any) {
    this.label = event.target.value;
    if(this.restaurants)
    {
      this.restaurants$.next(this.restaurants.filter((restaurant) => {
        return this.addRestaurantFiltered(restaurant, this.label, this.category, this.city);
      }));
    }

  }
  categoryChange(category: Category) {
    this.category = category;
    if(this.restaurants)
    {
      this.restaurants$.next(this.restaurants.filter((restaurant) => {
        return this.addRestaurantFiltered(restaurant, this.label, this.category, this.city);
      }));
    }
  }
  cityChange(event: any) {
    this.city = event.target.value;

    if(this.restaurants)
    {
      this.restaurants$.next(this.restaurants.filter((restaurant) => {
        return this.addRestaurantFiltered(restaurant, this.label, this.category, this.city);
      }));
    }
  }

  addRestaurantFiltered(restaurant: Restaurant, label: string, category: Category, city: string) : boolean{
    if(restaurant.label.toLowerCase().includes(label.toLowerCase()) && restaurant.address.town.toLowerCase().includes(city.toLowerCase()))
    {
      if(!category){
        return true;
      }
      if(restaurant.categories.includes(category)){
        return true;
      }
    }
    return false;
  }
}
