import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
