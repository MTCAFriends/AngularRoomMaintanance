import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSampledirective]'
})
export class SampledirectiveDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.backgroundcolor='blue';
  }
  // @HostListener('mouseenter') onMouseEnter(){
  //   this.appSampledirective('yellow');
  // }
  // @HostListener('mouseleave') onMouseLeave(){
  //   this.appSampledirective('null');
  // }
  // private appSampledirective(color:string){
  //   this.el.nativeElement.style.backgroundcolor=color;
  // }
}
