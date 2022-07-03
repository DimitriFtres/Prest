import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserComponent} from "@signup/user/user.component";

let routes:Routes = [
  {
    path: "",
    component: UserComponent,
    pathMatch: "full"
  },
  {
    path: "user",
    redirectTo: "",
    pathMatch: "full"
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

export class SignupRoutingModule {}
