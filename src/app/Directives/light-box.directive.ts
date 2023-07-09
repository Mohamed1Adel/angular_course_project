import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[lightBox]'
})
export class LightBoxDirective {
  // private eleRef;
  @Input('lightBox') highlightetColor: string = "yellow";
  @Input() defaultColor: string = "darkblue";
  constructor(private eleRef: ElementRef) {
    // this.eleRef.nativeElement.style.border=`2px solid ${this.defaultColor}`
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.eleRef.nativeElement.style.border=`2px solid ${this.defaultColor}`


  }

  @HostListener('mouseover') onMuseOver() {
    this.eleRef.nativeElement.style.border=`3px solid ${this.highlightetColor}`
  }
  @HostListener('mouseout') onMuseOut() {
    this.eleRef.nativeElement.style.border=`2px solid ${this.defaultColor}`
  }

}
