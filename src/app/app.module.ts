import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainModule } from "./main/main.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from "./main/main.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavbarComponent, MainComponent],
  imports: [BrowserModule, FormsModule, MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
