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

  cartInputInputHandler(event:any){
    this.cartItemQuantity = event.target.value
  }

  btnClickHandler(index:any,state:string){
    if(state ===  'minus' ){
      let obj = this.cartDetailArray[index]
      obj.quantity  = obj.quantity - 1
    }else{
      let obj = this.cartDetailArray[index]
      obj.quantity  = obj.quantity + 1
    }
  }
}
