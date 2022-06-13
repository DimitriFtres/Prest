import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserComponent} from "@signin/user/user.component";
import {RestaurantComponent} from "@signin/restaurant/restaurant.component";

const routes:Routes = [
  {
    path: "",
    redirectTo : 'user',
    pathMatch: "full"
  },
  {
    path: "user",
    component: UserComponent,
    pathMatch: "full"
  },
  {
    path: "restaurant",
    component: RestaurantComponent,
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
  ]
  ,
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class SigninRoutingModule {}
