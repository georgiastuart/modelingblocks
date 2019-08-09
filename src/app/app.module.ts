import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BlocklyComponent } from './blockly/blockly.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BlocklyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
