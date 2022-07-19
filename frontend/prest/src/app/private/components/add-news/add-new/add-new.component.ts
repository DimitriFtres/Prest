import {Component, Input, OnInit} from '@angular/core';
import {CommentaryAddPayload} from "@commentary/CommentaryAddPayload";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentaryService} from "@service/commentary/commentary.service";
import {RestaurantService} from "@service/restaurant/restaurant.service";
import {UserService} from "@service/user/user.service";
import {AuthService} from "../../../../security/service/auth.service";
import {RatingChangeEvent} from "angular-star-rating";
import {NewsRestaurantService} from "@service/newsRestaurant/news-restaurant.service";
import {NewsRestaurantAddPayload} from "@newsRestaurant/NewsRestaurantAddPayload";
import {UserRestaurantService} from "@service/userRestaurant/user-restaurant.service";
import {User} from "@user/User";

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  commentary!: CommentaryAddPayload;
  @Input() restaurant_id!: string;
  @Input() user!: User;
  note?: number;
  formCommentary: FormGroup = new FormGroup({
    text: new FormControl('', [Validators.email, Validators.required]),
  });
  userLink?: boolean;

  constructor(public newsService: NewsRestaurantService,
              public restaurantService: RestaurantService,
              public userService: UserService,
              public authService: AuthService,
              public userRestaurantService: UserRestaurantService) { }

  ngOnInit(): void {
    //verif si user a un lien avec le restaurant si oui alors on desactive l'ajout de commentaire
    console.log(sessionStorage.getItem('user'));
    if(sessionStorage.getItem('user'))
    {
      this.restaurantService.getDetail(this.restaurant_id).subscribe(restaurant => {
        this.userRestaurantService.getListFromRestaurant(restaurant.id_restaurant.toString()).subscribe(userRestaurant => {
            let bool = false;
            userRestaurant.forEach(value => {
              if(value.user.id_user == this.user.id_user)
              {
                bool = true;
              }
            });
            this.userLink = bool;
        });
      });
    }

  }

  submit(): void {
    this.restaurantService.getDetail(this.restaurant_id).subscribe(restaurant => {
      if(sessionStorage.getItem("user") != null)
        this.userService.getDetailFromEmail(sessionStorage.getItem("user")!).subscribe(user => {
          const newsPayload = {
            text: this.formCommentary.value.text,
            date: new Date(),
            restaurant: restaurant,
            user: user
          } as NewsRestaurantAddPayload
          this.newsService.create(newsPayload).subscribe( () => this.formCommentary.reset());
        });
    });
  }
}
