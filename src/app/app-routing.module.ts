import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './body-design/landingPage/landingPage.component';
import { LoginComponent } from './login/login.component';
import { BodyDesignComponent } from './body-design/body-design.component';
import { AdminControlComponent } from './admin-control/admin-control.component';
import { AdminUserComponent } from './admin-control/admin-user/admin-user.component';
import { AdminProductComponent } from './admin-control/admin-product/admin-product.component';
import { AdminOrderComponent } from './admin-control/admin-order/admin-order.component';

const routes: Routes = [
  { path: '', component:LoginComponent  },
  { path: 'login', component:LoginComponent  },
  { path: 'body', component:BodyDesignComponent , children:[
    { path: 'landingPage', component: LandingPageComponent },
    { path: 'productPage', component: ProductPageComponent },
    { path: 'cartPage', component: CartComponent },
    { path:'admin-control', component:AdminControlComponent, children:[
      { path:'admin-user', component:AdminUserComponent },
      { path:'admin-product', component:AdminProductComponent },
      { path:'admin-order', component:AdminOrderComponent }
    ] }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

