import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DollarsToInrPipe } from './dollar-to-inr.pipe';



@NgModule({
  declarations: [DollarsToInrPipe],
  imports: [
    CommonModule,

  ],
  exports:[DollarsToInrPipe]
})
export class PipesModule { }
