import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentaryAddPayload} from "@commentary/CommentaryAddPayload";
import {ActivatedRoute} from "@angular/router";
import {CommentaryService} from "@service/commentary/commentary.service";
import {RestaurantService} from "@service/restaurant/restaurant.service";
import {AuthService} from "../../../security/service/auth.service";
import {UserService} from "@service/user/user.service";
import {switchMap} from "rxjs/operators";
import {CredentialDto, SigninPayload} from "../../../security/model";
import {RatingChangeEvent} from "angular-star-rating";
import {User} from "@user/User";

@Component({
  selector: 'app-add-commentary',
  templateUrl: './add-commentary.component.html',
  styleUrls: ['./add-commentary.component.scss']
})
export class AddCommentaryComponent implements OnInit {
  commentary!: CommentaryAddPayload;
  @Input() restaurant_id!: string;
  @Input() user!: User;
  note?: number;
  formCommentary: FormGroup = new FormGroup({
    text: new FormControl('', [Validators.required]),
  });

  constructor(public commentaryService: CommentaryService,
              public restaurantService: RestaurantService,
              public authService: AuthService) { }

  ngOnInit(): void {
    //verif si user a un lien avec le restaurant si oui alors on desactive l'ajout de commentaire
    this.restaurantService.getDetail(this.restaurant_id).subscribe();
  }

  submit(): void {
    this.restaurantService.getDetail(this.restaurant_id).subscribe(restaurant => {
      const commentaryPayload = {
        text: this.formCommentary.value.text,
        note: this.note,
        date: new Date(),
        restaurant: restaurant,
        user: this.user,
        actif: true
      } as CommentaryAddPayload
      this.commentaryService.create(commentaryPayload).subscribe( () => this.formCommentary.reset());
    });
  }

  ratingChange($event: RatingChangeEvent) {
    this.note = $event.rating;
  }
}
