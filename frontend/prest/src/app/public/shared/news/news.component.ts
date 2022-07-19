import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {NewsRestaurantService} from "@service/newsRestaurant/news-restaurant.service";
import {NewsRestaurant} from "@newsRestaurant/NewsRestaurant";
import {AuthService} from "../../../security/service/auth.service";
import {Commentary} from "@commentary/Commentary";
import {User} from "@user/User";
import {CommentaryUpdatePayload} from "@commentary/CommentaryUpdatePayload";
import {NewsRestaurantUpdatePayload} from "@newsRestaurant/NewsRestaurantUpdatePayload";
import {Restaurant} from "@restaurant/Restaurant";
import {UserRestaurantService} from "@service/userRestaurant/user-restaurant.service";
import {RatingChangeEvent} from "angular-star-rating";
import {BehaviorSubject} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  host: {
    'data-slate-node': 'text'
  }
})
export class NewsComponent implements OnInit {

  @Input() restaurant_id!: string;
  @Input() news?: NewsRestaurant;
  @Input() user?: User;
  restaurant!: Restaurant;

  modifyBehavior: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  formNews: FormGroup = new FormGroup({
    text: new FormControl('', [Validators.required]),
  });

  constructor(public newsRestaurantService: NewsRestaurantService) {
  }
  ngOnInit(): void {
  }

  deleteNews(){
    let newsRestaurantUpdate = {
      id_news_restaurant: this.news!.id_news_restaurant,
      text: this.news!.text,
      restaurant: this.news!.restaurant,
      user: this.news!.user,
      date: this.news!.date,
      actif: false
    } as NewsRestaurantUpdatePayload
    this.newsRestaurantService.update(newsRestaurantUpdate).subscribe();
  }
  modifyNews(){
    this.formNews.setValue({
      text: this.news!.text
    });
    this.modifyBehavior.next(true);
  }

  confirmModification()
  {
    let newsUpdate = {
      id_news_restaurant: this.news!.id_news_restaurant,
      text: this.formNews.value.text,
      restaurant: this.news!.restaurant,
      user: this.news!.user,
      date: this.news!.date,
      actif: true
    } as NewsRestaurantUpdatePayload
    this.newsRestaurantService.update(newsUpdate).subscribe();
    this.modifyBehavior.next(false);

  }

  cancelModification() {
    this.modifyBehavior.next(false);

  }
}
