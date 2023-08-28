import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyDesignComponent } from './body-design.component';
import { CardComponent } from './card/card.component';
import { VideoPanelComponent } from './video-panel/video-panel.component';

import { BodyFooterComponent } from './body-footer/body-footer.component';
import { BodyFooterModule } from './body-footer/body-footer.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent,
    BodyDesignComponent,
    VideoPanelComponent,
  ],
  imports: [
    CommonModule,BodyFooterModule,MatTooltipModule,RatingModule,FormsModule
  ],exports:[CardComponent,VideoPanelComponent,BodyDesignComponent]
})
export class BodyDesignModule { }
