import { NgModule } from '@angular/core';

import { CopyDirective } from './directives/copy/copy.directive';

@NgModule({
  declarations: [
    CopyDirective,
  ],
  providers: [
    { provide: 'Navigator', useValue: navigator },
    { provide: 'Document', useValue: document },
    { provide: 'Window', useValue: window },
  ],
  exports: [CopyDirective]
})
export class AppDirectivesModule { }
