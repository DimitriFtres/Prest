import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from ".//home/home.component";

let routes:Routes = [
  {
    path: "",
    component: HomeComponent,
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

export class HomeRoutingModule {}
