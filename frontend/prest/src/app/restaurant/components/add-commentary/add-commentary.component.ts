import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentaryAddPayload} from "@commentary/CommentaryAddPayload";
import {ActivatedRoute} from "@angular/router";
import {CommentaryService} from "@service/commentary/commentary.service";
import {RestaurantService} from "@service/restaurant/restaurant.service";
import {AuthService} from "../../../security/service/auth.service";
import {UserService} from "@service/user/user.service";

@Component({
  selector: 'app-add-commentary',
  templateUrl: './add-commentary.component.html',
  styleUrls: ['./add-commentary.component.scss']
})
export class AddCommentaryComponent implements OnInit {
  commentary!: CommentaryAddPayload;
  isDisplayed: boolean = true;

  formCommentary: FormGroup = new FormGroup({
    text: new FormControl('', [Validators.email, Validators.required]),
  });

  constructor(public activatedRoute: ActivatedRoute,
              public commentaryService: CommentaryService,
              public restaurantService: RestaurantService,
              public userService: UserService,
              public authService: AuthService) { }

  ngOnInit(): void {
    //verif si user a un lien avec le restaurant si oui alors on desactive l'ajout de commentaire
    this.restaurantService.getDetail(this.activatedRoute.snapshot.params['id']).subscribe(restaurant => {

      if(sessionStorage.getItem('user') != null)
      {
        restaurant.userRestaurants.forEach(userRestaurant => {
          this.userService.getDetail(sessionStorage.getItem('user')!).subscribe(user => {
            if(userRestaurant.id_user == user)
            {
              this.isDisplayed = false;
            }
          });
        })
      }
    })
  }

  submit(): void {
    this.restaurantService.getDetail(this.activatedRoute.snapshot.params.get['id']).subscribe(restaurant => {
      this.userService.getDetail(sessionStorage.getItem('user')!).subscribe(user => {
        this.commentary = {
          note: 0,
          text: this.formCommentary.value.text,
          restaurant: restaurant,
          user: user,
          date: new Date()
        }
        this.commentaryService.create(this.commentary).subscribe();
      });
    });
  }

}
