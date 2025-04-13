import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";
import { RatingModule } from "primeng/rating";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations: [
        CardComponent
    ],

    imports: [
        CommonModule,RatingModule,FormsModule,MatIconModule
    ],

    exports: [
        CardComponent
    ]
})
export class CardModule {}