import { Component } from '@angular/core';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
    cardData:any
    constructor(
      private dataService:AppDataService,
    ){
      this.cardData = dataService.clickedCardData  
    }
}
