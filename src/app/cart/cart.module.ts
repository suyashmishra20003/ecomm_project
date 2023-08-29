import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { BodyFooterModule } from '../body-design/body-footer/body-footer.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    BodyFooterModule
  ],
  exports:[CartComponent]
})
export class CartModule { }
