import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {SignupRoutingModule} from "@signup/signup.routing.module";
import {HeaderModule} from "../../shared/header/header.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
