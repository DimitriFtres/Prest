import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "@signin/user/user.component";
import {NewsComponent} from "./restaurant/news/news.component";

const routes: Routes = [
  {
    path: "",
    loadChildren : () => import('@home/home.module').then(m => m.HomeModule),
    pathMatch: "full",
    //canActivate:
  },
  {
    path: "signin/user",
    // loadChildren : () => import('./public/public/signin/signin.module').then(m => m.SigninModule),
    component: UserComponent,
    pathMatch: "full"
  },
  {
    path: "signup/user",
    // loadChildren : () => import('@signup/signup.module').then(m => m.SignupModule),
    component: UserComponent,
    pathMatch: "full"
  },
  {
    path: "news",
    component: NewsComponent,
    pathMatch: "full"
  }
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
