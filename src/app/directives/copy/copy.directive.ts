import { Directive, Input, HostListener, Inject } from '@angular/core';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective {
  @Input() appCopy = '';

  constructor(
    @Inject('Navigator') public navigator: Navigator,
    @Inject('Document') public document: Document,
  ) { }

  @HostListener('click')
  public async copy(): Promise<void> {
    // code the copy text functionality here
  }
}
