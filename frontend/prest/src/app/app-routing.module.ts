import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {NotFoundComponent} from "@notFound/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren : () => import('@home/home.module').then(m => m.HomeModule),
    pathMatch: "full",
    //canActivate:
  },
  {
    path: "signin",
    loadChildren : () => import('@signin/signin.module').then(m => m.SigninModule),
    pathMatch: "full"
  },
  {
    path: "signup",
    loadChildren : () => import('@signup/signup.module').then(m => m.SignupModule),
    pathMatch: "full"
  },
  // {
  //   path: "**",
  //   component: NotFoundComponent,
  //   pathMatch: "full"
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
