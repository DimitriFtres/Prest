import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import {SignupRoutingModule} from "@signup/signup.routing.module";
import {HeaderModule} from "../../shared/header/header.module";



@NgModule({
  declarations: [
    UserComponent,
    RestaurantComponent
  ],
    imports: [
        CommonModule,
        SignupRoutingModule,
        HeaderModule
    ]
})
export class SignupModule { }
