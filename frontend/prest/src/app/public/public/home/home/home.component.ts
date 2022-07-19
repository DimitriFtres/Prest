import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../security/service/auth.service";
import {RestaurantService} from "@service/restaurant/restaurant.service";
import {Restaurant} from "@restaurant/Restaurant";
import {CommentaryService} from "@service/commentary/commentary.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurants?: Restaurant[];
  constructor(public authService: AuthService,
              public restaurantService: RestaurantService,
              public commentaryService: CommentaryService) { }

  ngOnInit(): void {
    this.restaurantService.getList().subscribe(restaurant => {
      this.restaurants = restaurant;
    });
  }
}
