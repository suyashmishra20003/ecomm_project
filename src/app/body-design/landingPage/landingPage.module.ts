import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BodyFooterModule } from "../body-footer/body-footer.module";
import { VideoPanelComponent } from "../video-panel/video-panel.component";
import { LandingPageComponent } from "./landingPage.component";
import { CardModule } from "src/app/card/card.module";
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
    declarations: [VideoPanelComponent,LandingPageComponent  ],
    imports: [CommonModule,BodyFooterModule,CardModule,AppRoutingModule],
    exports: [LandingPageComponent]
})
export class LandingPageModule {}