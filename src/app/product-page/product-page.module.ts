import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { BodyFooterModule } from '../body-design/body-footer/body-footer.module';
import {MatIconModule} from '@angular/material/icon';
import { InputTextModule } from 'primeng/inputtext';
import {MatInputModule} from '@angular/material/input';
import { ButtonModule } from 'primeng/button';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    BodyFooterModule,
    ButtonModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
    InputTextModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports:[ProductPageComponent]
})
export class ProductPageModule { }
