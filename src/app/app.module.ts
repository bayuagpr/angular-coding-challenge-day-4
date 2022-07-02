import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { AppDirectivesModule } from './app-directives.module'
import { AppPipesModule } from './app-pipes.module'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppDirectivesModule,
    AppPipesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
