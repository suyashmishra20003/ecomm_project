import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit{
    cardData:any
    deliveryOptions:any = []
    productPrice:number = 1
    quantityInputVal:number = 1
    cartBtnLabel:string = 'Add To Cart'
    cartBtnIcon:string = 'shopping_cart'
    cartBtnClass:string = 'p-button-info w-full'
    isCartBtnChecked:boolean = false
    constructor(
      private dataService:AppDataService,
    ){
      this.cardData = dataService.clickedCardData  
    }
  ngOnInit(): void {
    this.productPrice =  Math.ceil(
      this.cardData.price * 83.12
    )

    let cart = this.dataService.cartData
    cart.map(
      (item:any) => {
        if(this.cardData.id === item.id){
          this.cartBtnIcon = 'check_circle'
          this.cartBtnLabel = 'Item Added'
          this.cartBtnClass = 'p-button-success w-full'
        }
        
      } 
    )
    
    this.deliveryOptions = [
      { label:'Ship To Me' , icon:'local_shipping' , isClicked:false},
      { label:'Free Store Pickup' , icon:'storefront' , isClicked:false}, 
      { label:'Same Day Delivery' , icon:'speed' , isClicked:false},
    ]
  }
  onDeliveryOptionClicked(count:number){
      this.deliveryOptions.forEach( (item:any) => {
        item.isClicked = false
      });
      this.deliveryOptions[count].isClicked = true
  }

  addToCartHandler(){
    let cart = this.dataService.cartData
    let obj = this.cardData
    obj['quantity']= this.quantityInputVal
    let doesIncludeObj = false
    for (let i = 0; i < cart.length ; i++) {
      let item = cart[i];
      if(obj.id === item.id){
        doesIncludeObj = true       
      }
      
    }
    this.cartBtnLabel = 'Item Added'
    this.cartBtnIcon = 'check_circle'
    this.cartBtnClass = 'p-button-success w-full'

    if(!doesIncludeObj){
      cart.push(obj)
    }
    
    console.log(cart);
    
  }
}
