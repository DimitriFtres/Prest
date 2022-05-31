import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import {SignupRoutingModule} from "@signup/signup.routing.module";



@NgModule({
  declarations: [
    UserComponent,
    RestaurantComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule
  ]
})
export class SignupModule { }
