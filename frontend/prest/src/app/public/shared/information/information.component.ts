import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Restaurant} from "@restaurant/Restaurant";
import {RestaurantInformationEnum} from "@common/enum";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit, OnChanges {

  @Input() information!: RestaurantInformationEnum;
  @Input() restaurant!: Restaurant;

  informationToDisplay?: any;
  private readonly imageType : string = 'data:image/PNG;base64,';

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.information == RestaurantInformationEnum.ADDRESS)
    {
      this.informationToDisplay = this.restaurant.address.road + ' ' + this.restaurant.address.roadNumber;

      if(this.restaurant.address.roadBox)
        this.informationToDisplay += ' ' + this.restaurant.address.roadBox;

      this.informationToDisplay += ', ' + this.restaurant.address.zip + ' ' + this.restaurant.address.town
        + ' ' + this.restaurant.address.country;
    }
    if(this.information == RestaurantInformationEnum.MENU)
    {
      this.informationToDisplay = this.sanitizer.bypassSecurityTrustUrl(this.imageType + this.restaurant.menu);

    }
    if(this.information == RestaurantInformationEnum.DESCRIPTION)
    {
      this.informationToDisplay = this.restaurant.description;
    }
    if(this.information == RestaurantInformationEnum.CATEGORIES)
    {
      this.informationToDisplay = this.restaurant.categories.map(e => e.label).join(", ");
    }    }

  ngOnInit(): void {

  }


}
