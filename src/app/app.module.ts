import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModul } from './heroes/heroes.module';
import { ContadorModul } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModul,
    ContadorModul,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
