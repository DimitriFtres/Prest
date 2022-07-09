import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Restaurant} from "@restaurant/Restaurant";
import {RestaurantInformationEnum} from "@common/enum";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit, OnChanges {

  @Input() information!: RestaurantInformationEnum;
  @Input() restaurant!: Restaurant;

  informationToDisplay?: String;

  constructor() {
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
      this.informationToDisplay = "Afficher le menu voir pdf et img";
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
