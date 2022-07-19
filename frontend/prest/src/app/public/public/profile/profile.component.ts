import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "@service/user/user.service";
import {User} from "@user/User";
import {Restaurant} from "@restaurant/Restaurant";
import {UserRestaurantService} from "@service/userRestaurant/user-restaurant.service";
import {Commentary} from "@commentary/Commentary";
import {CommentaryService} from "@service/commentary/commentary.service";
import {RestaurantService} from "@service/restaurant/restaurant.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user?: User;
  restaurants?: Restaurant[];

  constructor(public route: ActivatedRoute,
              public userService: UserService,
              public userRestaurantService: UserRestaurantService,
              public commentaryService: CommentaryService,
              public restaurantService: RestaurantService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.userService.getDetail(id).subscribe(user => {
      this.user = user;
      this.restaurantService.getListFromUser(user.id_user.toString()).subscribe(restaurants => {
        this.restaurants = restaurants;
        this.commentaryService.getListFromUser(user.id_user.toString()).subscribe();
      });
    });
  }

}
