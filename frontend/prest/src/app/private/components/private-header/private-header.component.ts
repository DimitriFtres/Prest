import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../security/service/auth.service";
import {UserRestaurantService} from "@service/userRestaurant/user-restaurant.service";
import {RestaurantService} from "@service/restaurant/restaurant.service";
import {UserService} from "@service/user/user.service";
import {UserRestaurant} from "@userRestaurant/UserRestaurant";
import {User} from "@user/User";

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent implements OnInit {
  user!: User;
  constructor(public authService: AuthService,
              public userRestaurantService: UserRestaurantService,
              public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getDetailFromEmail(sessionStorage.getItem("user")!).subscribe(user => {
      this.user = user;
      this.userRestaurantService.getListFromUser(user.id_user.toString()).subscribe();
    })
  }

  sidebar() {
    let sidebar = document.getElementById("sidebar");
    if(sidebar != null)
    {
      console.log(sidebar.style.visibility)
      if(sidebar.style.visibility == 'visible' || sidebar.style.visibility == '')
        sidebar.style.visibility = 'hidden';
    }

  }
}
