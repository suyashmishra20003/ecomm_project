import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyDesignComponent } from './body-design.component';


import {MatTooltipModule} from '@angular/material/tooltip';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { LandingPageModule } from './landingPage/landingPage.module';
import { NavbarModule } from '../navbar/navbar.module';

import { BodyFooterModule } from './body-footer/body-footer.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
  
    BodyDesignComponent,
    
    
  ],
  imports: [
    CommonModule,FormsModule,BodyFooterModule,LandingPageModule,NavbarModule,AppRoutingModule
  ],exports:[BodyDesignComponent]
})
export class BodyDesignModule { }
