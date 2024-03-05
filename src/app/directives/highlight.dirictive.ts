import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  constructor() {}

  @HostBinding('style.border')
  border = '';

  @HostListener('mouseenter')
  onHover() {
    this.border = '3px solid blue';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.border = '';
  }
}
