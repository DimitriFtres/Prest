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
  informationToDisplay?: String;

  constructor(public activatedRoute: ActivatedRoute,
              public restaurantService: RestaurantService) { }

  ngOnInit(): void {
    let restaurant_id = this.activatedRoute.snapshot.params['id'];

    if(restaurant_id != null)
    {
      this.restaurantService.getDetail(restaurant_id).subscribe(restaurant => {
        this.restaurant = restaurant;
      });
    }

  }

  informationSelected(information?: String){

    if(information === RestaurantInformationEnum.ADDRESS)
    {
      this.informationToDisplay = "address";
    }
    if(information === RestaurantInformationEnum.MENU)
    {
      this.informationToDisplay = "menu";
    }
    if(information === RestaurantInformationEnum.DESCRIPTION)
    {
      this.informationToDisplay = "description";
    }
    if(information === RestaurantInformationEnum.CATEGORIES)
    {
      this.informationToDisplay = "categories";
    }
    if(information === undefined)
    {
      this.informationToDisplay = undefined;
    }
  }

}
