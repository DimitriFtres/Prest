import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "@service/restaurant/restaurant.service";
import {AuthService} from "../../../security/service/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RestaurantAddPayload} from "@restaurant/RestaurantAddPayload";
import {AddressAddPayload} from "@address/AddressAddPayload";
import {AddressService} from "@service/address/address.service";
import {CategoryService} from "@service/category/category.service";
import {UserRestaurantService} from "@service/userRestaurant/user-restaurant.service";
import {UserRestaurantAddPayload} from "@userRestaurant/UserRestaurantAddPayload";
import {UserService} from "@service/user/user.service";

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {
  menu!: File;
  image!: File;


  formRestaurant: FormGroup = new FormGroup({
    label: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    categories: new FormControl('', []),
    country: new FormControl('', [Validators.required]),
    town: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required]),
    road: new FormControl('', [Validators.required]),
    roadNumber: new FormControl('', [Validators.required]),
    roadBox: new FormControl('', [Validators.required])
  });
  constructor(public restaurantService: RestaurantService,
              public authService: AuthService,
              public addressService: AddressService,
              public categoryService: CategoryService,
              public userRestaurantService: UserRestaurantService,
              public userService: UserService,
              public roleService: ) { }

  ngOnInit(): void {
    this.formRestaurant.setValue({
      label: "Restaurant test",
      description: "Description",
      country: "Belgique",
      categories: "ahahahahahhaha",
      town: "Liège",
      zip: "4000",
      road: "Rue des baguettes",
      roadNumber: "103",
      roadBox: "B"
    })
  }
  submit()
  {
    let addressAdd = {
      country: this.formRestaurant.value.country,
      town: this.formRestaurant.value.town,
      zip: this.formRestaurant.value.zip,
      road: this.formRestaurant.value.road,
      roadNumber: this.formRestaurant.value.roadNumber,
      roadBox: this.formRestaurant.value.roadBox
    } as AddressAddPayload
    this.categoryService.getList().subscribe(lists => {

      this.addressService.create(addressAdd).subscribe(address => {

        let menuData = new FormData();
        menuData.append('file', this.menu);

        this.restaurantService.addFile(menuData).subscribe(menuPath => {

          let imageData = new FormData();
          imageData.append('file', this.image!);
          this.restaurantService.addFile(imageData).subscribe(imagePath => {

            let restaurantAdd = {
              label: this.formRestaurant.value.label,
              description: this.formRestaurant.value.description,
              menu: menuPath,
              categories: lists,
              actif: true,
              address: address,
              image: imagePath
            } as RestaurantAddPayload
            this.restaurantService.create(restaurantAdd).subscribe(restaurant => {
              if(sessionStorage.getItem('user') != null)
              {

                this.userService.getDetailFromEmail(sessionStorage.getItem('user')!).subscribe(user => {
                  let userRestaurantAdd = {
                    role: "ADMIN",
                    user: user,
                    restaurant: restaurant
                    } as UserRestaurantAddPayload
                  this.userRestaurantService.create(userRestaurantAdd).subscribe();
                });

              }

              // this.formRestaurant.reset();
            });
          });
        });
      });
    });

  }

  onMenuChange(event: any) {
    this.menu = event.target.files[0];
  }

  onImageChange(event: any) {
    this.image = event.target.files[0];
  }

}

