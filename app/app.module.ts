import { HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent }  from './app.component';
import { LandingComponent }  from './components/app.landing.component';
import { BlankComponent } from './components/app.page.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: '',
	component: LandingComponent,
	pathMatch: 'full',
  }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, LandingComponent, BlankComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
