import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact/contact-subscribe/contact-form.component';
import { HomeComponent } from './home/home.component';
import { ImpactComponent } from './impact/impact.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    HomeComponent,
    ImpactComponent,
    SubscribeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
