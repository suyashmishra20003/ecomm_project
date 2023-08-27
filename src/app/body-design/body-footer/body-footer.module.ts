import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyFooterComponent } from './body-footer.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../card/card.component';



@NgModule({
  declarations: [
    BodyFooterComponent
  ],
  imports: [
    CommonModule,MatButtonModule,MatIconModule,MatMenuModule,BrowserAnimationsModule,BrowserModule
  ],
  exports:[BodyFooterComponent]
})
export class BodyFooterModule { }
