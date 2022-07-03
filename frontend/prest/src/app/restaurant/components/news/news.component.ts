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
  news?: NewsRestaurant[];
  constructor(public newsRestaurantService: NewsRestaurantService,
              public authService: AuthService) {
  }
  ngOnInit(): void {
    this.newsRestaurantService.getListFromRestaurant(this.restaurant_id).subscribe(news => {
      this.news = news;
    });
  }


}
