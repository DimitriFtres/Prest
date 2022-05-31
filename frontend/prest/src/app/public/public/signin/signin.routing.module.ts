import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserComponent} from "@signin/user/user.component";
import {RestaurantComponent} from "@signin/restaurant/restaurant.component";

let routes:Routes = [
  {
    path: "",
    component: UserComponent,
    pathMatch: "full"
  },
  {
    path: "user",
    redirectTo: "restaurant",
    pathMatch: "full"
  },
  {
    path: "restaurant",
    component: RestaurantComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  declarations: []
  ,
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class SigninRoutingModule {}
