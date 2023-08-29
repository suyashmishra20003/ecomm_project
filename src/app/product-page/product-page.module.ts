import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { BodyFooterModule } from '../body-design/body-footer/body-footer.module';



@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    BodyFooterModule
  ],
  exports:[ProductPageComponent]
})
export class ProductPageModule { }
