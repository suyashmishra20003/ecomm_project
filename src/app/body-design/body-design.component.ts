import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppDataService } from '../app-data.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-body-design',
  templateUrl: './body-design.component.html',
  styleUrls: ['./body-design.component.scss']
})
export class BodyDesignComponent implements OnDestroy{
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

      } 
    )
    
  }

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe()
  }

  cardClickHandler(cardData:any){
    cardData['isitemAddedToWishlist'] = false
    this.dataService.clickedCardData = cardData
    this.router.navigateByUrl('productPageComp');

  }
}
