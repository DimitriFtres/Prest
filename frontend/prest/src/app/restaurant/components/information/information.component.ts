import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "@restaurant/Restaurant";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  @Input() information: String = '';
  @Input() restaurant!: Restaurant;

  constructor() { }

  ngOnInit(): void {
  }

}
