import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './body-design/landingPage/landingPage.component';
import { LoginComponent } from './login/login.component';
import { BodyDesignComponent } from './body-design/body-design.component';

const routes: Routes = [
  { path: '', component:LoginComponent  },
  { path: 'login', component:LoginComponent  },
  { path: 'body', component:BodyDesignComponent , children:[
    { path: 'landingPage', component: LandingPageComponent },
    { path: 'productPage', component: ProductPageComponent },
    { path: 'cartPage', component: CartComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

