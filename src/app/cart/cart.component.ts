import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItemQuantity:number  = 1
  totalPrice:number = 0
  originalPrice:number = 1
  
  constructor(
      public dataService:AppDataService,
      private router:Router
    ){
  }
  ngOnInit(): void {
    this.calculatePrice()
  }


  btnClickHandler(index:any,state:string){
    let obj = this.dataService.cartData[index]
    this.originalPrice = obj.price
    if(state ===  'plus' ){
      obj.quantity = obj.quantity + 1
      this.totalPrice = this.totalPrice + Math.ceil(obj.price)
    }else{
      obj.quantity = obj.quantity - 1
      this.totalPrice = this.totalPrice - Math.ceil(obj.price)

    }
  }

  deleteFromCartHandler(index:number,cardObj:any){
      let arr = this.dataService.cartData
      let cardPrice = cardObj.quantity * cardObj.price
      this.totalPrice = this.totalPrice - cardPrice
      if(arr.length == 1){
        arr.splice(index,1);
        this.router.navigateByUrl('');
      }else{
        arr.splice(index,1);

      }

  }

  calculatePrice(){
    let arr = this.dataService.cartData
    arr.map(
      (item:any, index:number)=>{
        let price = item.quantity * item.price
        this.totalPrice = this.totalPrice + price
      }
    )
  }
}
