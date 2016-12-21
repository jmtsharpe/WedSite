import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BlankComponent } from './components/app.page.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BlankComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
