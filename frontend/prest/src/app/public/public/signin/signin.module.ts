import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SigninRoutingModule} from "@signin/signin.routing.module";
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';
import {HeaderModule} from "../../shared/header/header.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RestaurantComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ]
})
export class SigninModule { }
