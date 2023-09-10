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
    constructor(
      private dataService:AppDataService,
    ){
      this.cardData = dataService.clickedCardData  
    }
  ngOnInit(): void {
    this.productPrice =  Math.ceil(
      this.cardData.price * 83.12
    )
    console.log("======================");
    console.log(this.cardData);
    
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
}
