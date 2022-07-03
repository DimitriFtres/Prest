import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SigninRoutingModule} from "@signin/signin.routing.module";
import { UserComponent } from './user/user.component';
import {HeaderModule} from "../../shared/header/header.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
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
