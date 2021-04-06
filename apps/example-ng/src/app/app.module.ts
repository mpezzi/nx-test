import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NxTestUiModule } from '@mpezzi/nx-test-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxTestUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
