import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "@restaurant/Restaurant";
import {CommentaryService} from "@service/commentary/commentary.service";
import {Commentary} from "@commentary/Commentary";
import {DomSanitizer, ɵDomSanitizerImpl} from "@angular/platform-browser";

@Component({
  selector: ' app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {
  @Input("restaurant") restaurant!: Restaurant;
  @Input("commentaries") commentaries!: Commentary[];
  average?: number;
  image : any;
  private readonly imageType : string = 'data:image/PNG;base64,';

  constructor(public commentaryService : CommentaryService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.image = this.sanitizer.bypassSecurityTrustUrl(this.imageType + this.restaurant.image)
    let restaurantCommentaries = this.commentaries.filter(commentary => {
      return commentary.restaurant.id_restaurant == this.restaurant.id_restaurant;
    });
    let averageNote = 0;
    restaurantCommentaries.forEach(value => {
      averageNote += value.note;
    });
    if(restaurantCommentaries.length > 0)
    {
      averageNote /= restaurantCommentaries.length;
    }
    this.average = averageNote;
  }

}
