import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { BodyFooterModule } from '../body-design/body-footer/body-footer.module';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    BodyFooterModule,
    MatIconModule
  ],
  exports:[ProductPageComponent]
})
export class ProductPageModule { }
