import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { OverlayPanel } from 'primeng/overlaypanel';

@Directive({
  selector: '[appNavbar]'
})
export class NavbarDirective {
  @Input('appNavbar') menuTrigger: MatMenuTrigger | undefined;

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') showOverlay(){
    if (this.menuTrigger) {
        this.menuTrigger.openMenu();
      }
  }

  @HostListener('mouseleave') hideOverlay(){

       
  }
}
