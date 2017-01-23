import { Component, HostListener } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import {PersistentRouterOutlet} from './persistent-router-outlet';


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.main.component.html',
  styleUrls: ['assets/styles/base.css'],
})
export class AppComponent  { 
	name = 'Angular';
}
