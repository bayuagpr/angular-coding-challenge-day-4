import { NgModule } from '@angular/core';

import { TruncatePipe } from './pipes/truncate/truncate.pipe';

@NgModule({
  declarations: [
    TruncatePipe,
  ],
  exports: [TruncatePipe]
})
export class AppPipesModule { }
