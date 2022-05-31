import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SigninRoutingModule} from "@signin/signin.routing.module";
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';
import {HeaderComponent} from "../../shared/header/header.component";
import {AppModule} from "../../../app.module";
import {HeaderModule} from "../../shared/header/header.module";



@NgModule({
  declarations: [
    RestaurantComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    HeaderModule
  ]
})
export class SigninModule { }
