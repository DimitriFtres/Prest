import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "@service/user/user.service";
import {User} from "@user/User";
import {Restaurant} from "@restaurant/Restaurant";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user?: User;
  restaurants?: Restaurant[];
  constructor(public route: ActivatedRoute,
              public userService: UserService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.userService.getDetail(id).subscribe(user => {
      this.user = user;
      this.restaurants = this.user.userRestaurants.map(userRestaurant => userRestaurant.restaurant);
    });
  }

}
