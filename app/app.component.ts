import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/landing.component.html',
  styleUrls: ['assets/styles/base.css'],
})
export class AppComponent  { name = 'Angular'; }
