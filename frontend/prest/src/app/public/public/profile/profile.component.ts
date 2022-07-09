import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "@service/user/user.service";
import {User} from "@user/User";
import {Restaurant} from "@restaurant/Restaurant";
import {UserRestaurantService} from "@service/userRestaurant/user-restaurant.service";
import {Commentary} from "@commentary/Commentary";
import {CommentaryService} from "@service/commentary/commentary.service";

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
              public commentaryService: CommentaryService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.userService.getDetail(id).subscribe(user => {
      this.user = user;
      this.userRestaurantService.getListFromUser(user.id_user.toString()).subscribe(userRestaurants => {
        this.restaurants = userRestaurants.map(userRestaurant => userRestaurant.restaurant);
        this.commentaryService.getListFromUser(user.id_user.toString()).subscribe();
      });
    });
  }

}
