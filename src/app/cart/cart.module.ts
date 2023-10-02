import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { BodyFooterModule } from '../body-design/body-footer/body-footer.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    BodyFooterModule,
    MatIconModule,
    InputNumberModule,
    FormsModule,
    InputTextModule,
    MatTooltipModule,
    PipesModule
  ],
  exports:[CartComponent]
})
export class CartModule { }
