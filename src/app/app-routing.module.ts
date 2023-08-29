import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyDesignComponent } from './body-design/body-design.component';
import { CartComponent } from './cart/cart.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component:BodyDesignComponent  },
  { path: 'cartComp', component: CartComponent },
  { path: 'productPageComp', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }