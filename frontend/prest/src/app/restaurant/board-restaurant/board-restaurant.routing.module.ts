import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeRestaurantComponent} from "./home-restaurant/home-restaurant.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: "home/:id",
    component: HomeRestaurantComponent,
    pathMatch: "full"
  }
]
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
export class BoardRestaurantRoutingModule { }
