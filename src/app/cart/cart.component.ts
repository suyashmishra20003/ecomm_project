import { Component } from '@angular/core';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartDetailArray:any = []
  cartItemQuantity:number  = 1
  
  constructor(public dataService:AppDataService){
    this.cartDetailArray = this.dataService.cartData
  }
}
