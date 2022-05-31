import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./public/shared/header/header.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './public/shared/category/category.component';
import {HttpClientModule} from "@angular/common/http";
import {ImagePresentationComponent} from "./public/shared/image-presentation/image-presentation.component";
import {HomeComponent} from "@home/home/home.component";
import { ListRestaurantComponent } from './public/shared/list-restaurant/list-restaurant.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './public/shared/footer/footer.component';
import { NotFoundComponent } from './public/public/not-found/not-found/not-found.component';
import {RouterOutlet} from "@angular/router";
import {SigninModule} from "@signin/signin.module";
import {SignupModule} from "@signup/signup.module";
import {HeaderModule} from "./public/shared/header/header.module";

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ImagePresentationComponent,
    HomeComponent,
    ListRestaurantComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    SigninModule,
    SignupModule,
    HeaderModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
