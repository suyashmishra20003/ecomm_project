import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AppDataService } from "src/app/app-data.service";

@Component({
    selector: 'app-landingPage',
    templateUrl: './landingPage.component.html',
    styleUrls: ['./landingPage.component.scss']
})
export class LandingPageComponent implements OnDestroy,OnInit {
    cardArray:any = []
    dataSub:Subscription | undefined
    imageArray : string[] = [
      'acer', 'apple', 'asus','poco','hp','lenovo','samsung','xiaomi','vivo','boat','oneplus','microsoft'
    ]
    constructor(
        public dataService:AppDataService,
        private router :Router 
      ){
  
    }
   
    ngOnInit(): void {
       this.dataSub = this.dataService.fetchData('products').subscribe(
        data => {
          this.cardArray = data;
          console.log(this.cardArray);
          this.dataService.productData = JSON.parse(JSON.stringify(data ? data : []));
  
        } 
      )
      
    }
  
    ngOnDestroy(): void {
      this.dataSub?.unsubscribe()
    }
  
    cardClickHandler(cardData:any){
      cardData['isitemAddedToWishlist'] = false
      this.dataService.clickedCardData = cardData
      this.router.navigateByUrl('body/productPage');
  
    }
}