import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-presentation',
  templateUrl: './image-presentation.component.html',
  styleUrls: ['./image-presentation.component.scss']
})
export class ImagePresentationComponent implements OnInit {

  @Input("url")
  imageUrl?: String;
  @Input("pathTo")
  pathTo?: String;
  
  constructor() { }

  ngOnInit(): void {
  }

}
