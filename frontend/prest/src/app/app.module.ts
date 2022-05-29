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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    ImagePresentationComponent,
    HomeComponent,
    ListRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
