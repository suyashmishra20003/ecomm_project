import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { NavbarDirective } from './navbar.directive';
import {MatListModule} from '@angular/material/list';
import { BodyDesignModule } from '../body-design/body-design.module';



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    HttpClientModule,
    BodyDesignModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatMenuModule,
    OverlayModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatBadgeModule,
    OverlayPanelModule  ,
    ButtonModule
  ],
  exports:[NavbarComponent]
})
export class NavbarModule { }
