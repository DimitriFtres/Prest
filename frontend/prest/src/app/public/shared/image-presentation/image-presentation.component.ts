import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-image-presentation',
  templateUrl: './image-presentation.component.html',
  styleUrls: ['./image-presentation.component.scss']
})
export class ImagePresentationComponent implements OnInit {

  @Input("url")
  imageUrl?: string;
  urlDecode!: any;
  @Input("pathTo")
  pathTo?: string;
  private readonly imageType : string = 'data:image/PNG;base64,';
  private defaultImage: String = "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg";

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if(this.imageUrl != null)
      this.urlDecode = this.sanitizer.bypassSecurityTrustUrl(`url(${(this.imageType + this.imageUrl)})`);
    else
      this.urlDecode = `url(${(this.defaultImage)})`;
    console.log(this.urlDecode);
  }

}
