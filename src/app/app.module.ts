import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarModule } from './navbar/navbar.module';
import { BodyDesignModule } from './body-design/body-design.module';
import { BodyDesignComponent } from './body-design/body-design.component';

@NgModule({
  declarations: [
    AppComponent,BodyDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    MatButtonModule,
    BodyDesignModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }