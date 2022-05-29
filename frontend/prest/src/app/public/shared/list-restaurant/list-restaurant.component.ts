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
  label: String = "";
  city: String = "";
  category: Category = {} as Category;

  constructor(public restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getList().subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }
  labelChange(event: any) {
    this.label = event.target.value;
    this.restaurantService.searchRestaurants(this.label, this.city, this.category).subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }
  categoryChange(category: Category) {
    this.category = category;
    this.restaurantService.searchRestaurants(this.label, this.city, this.category).subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }
  cityChange(event: any) {
    this.city = event.target.value;
    this.restaurantService.searchRestaurants(this.label, this.city, this.category).subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }
}
