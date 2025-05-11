import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BodyDesignModule } from './body-design/body-design.module';
import { CartModule } from './cart/cart.module';
import { ProductPageModule } from './product-page/product-page.module';
import { LoginModule } from "./login/login.module";
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BodyDesignModule,
    CartModule,
    ProductPageModule,
    BrowserAnimationsModule,
    LoginModule,
    AppRoutingModule
],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }