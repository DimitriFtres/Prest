import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestaurantService} from "@service/restaurant/restaurant.service";
import {Restaurant} from "@restaurant/Restaurant";
import {RestaurantInformationEnum} from "@common/enum";

@Component({
  selector: 'app-home-restaurant',
  templateUrl: './home-restaurant.component.html',
  styleUrls: ['./home-restaurant.component.scss']
})
export class HomeRestaurantComponent implements OnInit {

  restaurant?: Restaurant;
  informations = RestaurantInformationEnum;
  informationToDisplay?: RestaurantInformationEnum;
  restaurant_id?: string;

  constructor(public activatedRoute: ActivatedRoute,
              public restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurant_id = this.activatedRoute.snapshot.params['id'];

    if(this.restaurant_id != null)
    {
      this.restaurantService.getDetail(this.restaurant_id.toString()).subscribe(restaurant => {
        this.restaurant = restaurant;
      });
    }
  }

  informationSelected(information?: string){

    if(information === RestaurantInformationEnum.ADDRESS)
    {
      this.informationToDisplay = RestaurantInformationEnum.ADDRESS;
    }
    if(information === RestaurantInformationEnum.MENU)
    {
      this.informationToDisplay = RestaurantInformationEnum.MENU;
    }
    if(information === RestaurantInformationEnum.DESCRIPTION)
    {
      this.informationToDisplay = RestaurantInformationEnum.DESCRIPTION;
    }
    if(information === RestaurantInformationEnum.CATEGORIES)
    {
      this.informationToDisplay = RestaurantInformationEnum.CATEGORIES;
    }
    if(information === undefined)
    {
      this.informationToDisplay = undefined;
    }
  }

}
