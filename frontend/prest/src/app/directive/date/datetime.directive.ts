import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appDatetime]'
})
export class DatetimeDirective {
  @Input() date!: Date;
  constructor(private _elementRef: ElementRef) { }

  ngOnInit(){
    if(this.date != null)
    {
      this._elementRef.nativeElement.innerHTML = this.date.getDate() + '/' + this.date.getMonth() + '/' + this.date.getFullYear()
        + ' à ' + this.date.getUTCHours() + ':' + this.date.getMinutes() + ':' + this.date.getSeconds();
    }

  }
}
