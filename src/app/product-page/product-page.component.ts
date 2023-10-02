import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

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
    isAddedToWishlist:boolean = false
    wishlistBtnClass:string = 'basic' 
    wishListObj:any
    horizontalPosition: MatSnackBarHorizontalPosition = 'end';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    constructor(
      private dataService:AppDataService,
      private router:Router,
      private _snackBar: MatSnackBar
    ){
      this.cardData = dataService.clickedCardData  
    }
  ngOnInit(): void {
    this.productPrice =  Math.ceil(
      this.cardData.price * 83.12
    )

    let cart = this.dataService.cartData
    let wishlist  = this.dataService.wishListData
    cart.map(
      (item:any) => {
        if(this.cardData.id === item.id){
          this.cartBtnIcon = 'check_circle'
          this.cartBtnLabel = 'Go To Cart'
          this.cartBtnClass = 'p-button-success w-full'
          this.quantityInputVal = item.quantity
          
        }
        
      } 
    )

    wishlist.map(
      (item:any) => {
        if(this.cardData.id === item.id){
          // if(item.hasOwnProperty('isitemAddedToWishlist')){
          //   if(item.isitemAddedToWishlist === true){
          //     this.wishlistBtnClass = 'warn'
          //   }
          // }
          this.isAddedToWishlist = true

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
    if(this.cartBtnLabel === 'Go To Cart'){
      this.router.navigateByUrl('cartComp')
    } else{
      let cart = this.dataService.cartData
      let obj = this.cardData
      obj['quantity']= this.quantityInputVal
      obj['isitemAddedToWishlist']= false
      let doesIncludeObj = false
      for (let i = 0; i < cart.length ; i++) {
        let item = cart[i];
        if(obj.id === item.id){
          doesIncludeObj = true       
        }
        
      }
      this.cartBtnLabel = 'Go To Cart'
      this.cartBtnIcon = 'check_circle'
      this.cartBtnClass = 'p-button-success w-full'
      this._snackBar.open('Added to Cart!!', 'Close', {
        duration: 2000, // Duration in milliseconds (e.g., 3000 ms = 3 seconds)
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      if(!doesIncludeObj){
        cart.push(obj)
      }    

    }
  }

  addToWishlistHandler(){

   

    this.isAddedToWishlist = !this.isAddedToWishlist
    let arr = this.dataService.wishListData
    let obj = this.cardData
    let bool = false
    if(this.isAddedToWishlist){
        this.wishlistBtnClass = 'warn'
        obj.isitemAddedToWishlist = true
        arr.map(
          (item:any,i:number)=>{
            if(item.id === obj.id){
              bool = true
            }
          }
        )
        if(!bool){
          arr.push(obj)
        }
        this._snackBar.open('Added to Wishlist!!', 'Close', {
          duration: 2000, // Duration in milliseconds (e.g., 3000 ms = 3 seconds)
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      
    }else{
      this.wishlistBtnClass = 'basic'
      obj.isitemAddedToWishlist = false
      let indexOfObj = -1
      arr.map(
        (item:any,index:number) => {
          if(obj.id === item.id){
              indexOfObj = index
          }
        }
      )
      arr.splice(indexOfObj,1)

    }

   
    console.log(arr);
    
  }
}
