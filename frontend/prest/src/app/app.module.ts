import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './public/shared/category/category.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ImagePresentationComponent} from "./public/shared/image-presentation/image-presentation.component";
import {HomeComponent} from "@home/home/home.component";
import { ListRestaurantComponent } from './public/shared/list-restaurant/list-restaurant.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './public/shared/footer/footer.component';
import { NotFoundComponent } from './public/public/not-found/not-found/not-found.component';
import {SigninModule} from "@signin/signin.module";
import {SignupModule} from "@signup/signup.module";
import {HeaderModule} from "./public/shared/header/header.module";
import { HomeRestaurantComponent } from './restaurant/board-restaurant/home-restaurant/home-restaurant.component';
import { NewsComponent } from './public/shared/news/news.component';
import { CommentaryComponent } from './public/shared/commentary/commentary.component';
import { AddCommentaryComponent } from './private/components/add-commentary/add-commentary.component';
import { InformationComponent } from './public/shared/information/information.component';
import {AddresstoStringDirective} from "@directive/address";
import {BoardRestaurantModule} from "./restaurant/board-restaurant/board-restaurant.module";
import {StarRatingModule} from "angular-star-rating";
import {PublicGuard, SecurityGuard} from "./security/guard";
import {HttpInterceptorService} from "@service/httpService/http.interceptor";
import { PrivateHeaderComponent } from './private/components/private-header/private-header.component';
import { ProfileComponent } from './public/public/profile/profile.component';
import { ModifyUserInformationsComponent } from './private/page/modify-user-informations/modify-user-informations.component';
import { AddNewComponent } from './private/components/add-news/add-new/add-new.component';
import { RestaurantCardComponent } from './public/shared/restaurantCard/restaurant-card/restaurant-card.component';
import { AddRestaurantComponent } from './private/page/addRestaurant/add-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ImagePresentationComponent,
    HomeComponent,
    ListRestaurantComponent,
    FooterComponent,
    NotFoundComponent,
    HomeRestaurantComponent,
    NewsComponent,
    CommentaryComponent,
    AddCommentaryComponent,
    InformationComponent,
    AddresstoStringDirective,
    PrivateHeaderComponent,
    ProfileComponent,
    ModifyUserInformationsComponent,
    AddNewComponent,
    RestaurantCardComponent,
    AddRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    SigninModule,
    SignupModule,
    HeaderModule,
    FormsModule,
    BoardRestaurantModule,
    StarRatingModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    SecurityGuard,
    PublicGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
