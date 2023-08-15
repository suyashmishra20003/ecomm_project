import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyDesignComponent } from './body-design.component';
import { CardComponent } from './card/card.component';
import { VideoPanelComponent } from './video-panel/video-panel.component';
import { BodyFooterModule } from './body-footer/body-footer.module';
import { BodyFooterComponent } from './body-footer/body-footer.component';



@NgModule({
  declarations: [
    CardComponent,
    VideoPanelComponent,
    BodyFooterComponent
  ],
  imports: [
    CommonModule,BodyFooterModule
  ],exports:[CardComponent,VideoPanelComponent,BodyFooterComponent]
})
export class BodyDesignModule { }
