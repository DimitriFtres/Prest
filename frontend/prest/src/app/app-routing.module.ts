import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "@signin/user/user.component";
import {NewsComponent} from "./public/shared/news/news.component";
import {HomeComponent} from "@home/home/home.component";
import {PublicGuard, SecurityGuard} from "./security/guard";
import {ProfileComponent} from "./public/public/profile/profile.component";
import {ModifyUserInformationsComponent} from "./private/page/modify-user-informations/modify-user-informations.component";
import {NotFoundComponent} from "@notFound/not-found/not-found.component";
import {AddRestaurantComponent} from "./private/page/addRestaurant/add-restaurant.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
    canActivate: [PublicGuard]
  },
  {
    path: "signin",
    loadChildren : () => import('@signin/signin.module').then(m => m.SigninModule),
    pathMatch: "prefix",
    canActivate: [PublicGuard]
  },
  {
    path: "signup",
    loadChildren : () => import('@signup/signup.module').then(m => m.SignupModule),
    pathMatch: "prefix",
    canActivate: [PublicGuard]

  },
  {
    path: "restaurant",
    loadChildren: () => import('./restaurant/board-restaurant/board-restaurant.module').then(m => m.BoardRestaurantModule),
    pathMatch: "prefix",
    canActivate: [PublicGuard]
  },
  {
    path: "profile/:id",
    component: ProfileComponent,
    pathMatch: "full",
    canActivate: [PublicGuard]
  },
  {
    path:"modifyUser/:id",
    component: ModifyUserInformationsComponent,
    pathMatch: "full",
    canActivate: [SecurityGuard]
  },
  {
    path:"add-restaurant",
    component: AddRestaurantComponent,
    pathMatch: "full",
    canActivate: [SecurityGuard]
  },
  {
    path: "**",
    component: NotFoundComponent,
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
