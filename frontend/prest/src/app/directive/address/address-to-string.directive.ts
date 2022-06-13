import {Directive, ElementRef, Input} from '@angular/core';
import {Address} from "@address/Address";

@Directive({
  selector: '[appAddressToString]'
})
export class AddressToStringDirective {
  @Input() address!: Address;
  constructor(private _elementRef: ElementRef) { }

  ngOnInit(){
    this._elementRef.nativeElement.innerHTML = this.address.road + ' ' + this.address.roadNumber;

    if(this.address.roadBox)
      this._elementRef.nativeElement.innerHTML += ' ' + this.address.roadBox;

    this._elementRef.nativeElement.innerHTML += ', ' + this.address.zip + ' ' + this.address.town
      + ' ' + this.address.country;
  }
}
